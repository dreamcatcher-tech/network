
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

Backchat can say what the path, commit, and other details of the session are, but the UI has to fetch that directly.

Backchat has a single focus, which is a session file that it is currently pointing at

Help might have a link to its provenance as an agent ?
Recipes used in RAG seem different to that which boots up an agent.  Each agent might have a set of RAG instructions, which might be shared between many agents.
Also they should be able to search the filesystem.

Is an agent a session ?