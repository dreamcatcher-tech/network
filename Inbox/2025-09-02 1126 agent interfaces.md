
>[!tip] Created: [2025-09-02 Tue 11:26]

>[!question] Targets: 

>[!danger] Depends: 

the mcp interface lets external messages come in ?
faces let you see inside of the container in its running and idle state.


booting the agent should start a job ?
or, jobs always come in via mcp ?
views cannot start jobs, they can only present jobs ?

Jobs come in from the mcp tool calls.
views let you see inside the running system.

a view is always assosciated with a tool call.

So if you fired up codex, you would get back the view id that started the process running, so you could come look at it.

This means that views cannot start tasks.
an agent can be given multiple tasks.

view-0 might be a resources view that just shows the task status of the system ?

I thas to be tool calls so that other ai agents can start off jobs on other agents.

there might be some system level tool calls, like cloning a git repo, installing some apt packages ?

which git repo to clone should be part of the workspace.toml

the state of the git repo seems critical to the identity of the agent, where it is almost entirely defined by this working tree state.

It might be told to continually track a particular git repo, so it waits for updates.
this is good for a knowledge base.

? can a git repo be added later ? yes.
multiple git repos can be added too.

The tool call might just be a command to run with args ?
no need to require the server itself to be rewritten just to have a new tool call ?
the mode, as in long running, can be returned ?
can say if you want to wait until it finishes - so sync would run until completion then give back a result.
or, just return immediately on all of them, and give a resource update on the job status.

views can be 0:subview where the subview is just a different format of the same thing, like a mobile viewer vs desktop.

