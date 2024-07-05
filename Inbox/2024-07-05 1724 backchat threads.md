
>[!tip] Created: [2024-07-05 Fri 17:24]

>[!question] Targets: 

>[!danger] Depends: 

These are at the same level of backchat.

The thread would store within it which backchat started it, or which thread started it.
It would store if it was remote or local, and if remote would have the PID stored.
Store the actorId that created it, so we can update the sessions/
store the agent files and parameters that were used to start the thread
files are given by whatever the branch has access to.  Files might be in a remote repo, but they would get pulled into the thread branch.


May set an expected expiry time, for cleanup.

backchat is always starting new threads ?

But really backchat is the only thing that receives a prompt ?
Prompt takes what the sender thinks the target is, since this can actually change.
Can also take what the hash the sender thinks it was too ?

backchat holds a pointer to the session currently being targetted, and backchat can always intercept any prompt.
Backchat has a single focus, which is a session file that it is currently pointing at.

Backchat can say what the path, commit, and other details of the thread are, but the UI has to fetch that directly.


Help might have a link to its provenance as an agent ?
Recipes used in RAG seem different to that which boots up an agent.  Each agent might have a set of RAG instructions, which might be shared between many agents.
Also they should be able to search the filesystem.

Is a running agent a session ?
Is a multisession agent any different, or just the same as a collection of sessions ?
A thread is a running agent image.
An agent image plus some optional files on the filesystem is a thread, or, running agent.

Backchat itself is the loading of an agent image, which we maintain as part of the artifact codebase.

Maybe the agent is the image, and a thread is just the agent running ?
a multisession agent is just a shared filesystem that each thread updates.

What about a thread that calls into another thread to make changes ?  That might be just a multiparty chat.

How to change the agent that runs the backchat thread ?  pointer to a file ?

Isolates: pieces of conventional code packaged in such a way as to be callable by AI models.

Helps: pieces of text that contain instructions for an agent to expand and fine tune their abilities to get jobs done, instead of packing everything into the system prompt.  The instructions might involve calling on other agents

Agents: system prompts and commands for calling isolates.  When they are invoked using an AI model, the invocation becomes a Thread.

Threads: A running agent, containing stateful conversation and the filesystem in a possibly mutated state.

What about changing the backchat help ?