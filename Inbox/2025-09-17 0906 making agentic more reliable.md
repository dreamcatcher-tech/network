
>[!tip] Created: [2025-09-17 Wed 09:06]

>[!question] Targets: 

>[!danger] Depends: 

reliability and testability of the glue code seems important.

process manager, so we can control each process in deno, and can fully control things like tmux.

we should make all the message passing be a bus, on deno, and stdin is just a way to interact with stdio programs.

pup the deno process manager might help there.

make a mock for the openai api, and capture some responses, so that we can then replay them really fast in testing, so we can test with the full codex.

IPC should be bus like, and standard, somehow.

talking between faces on the same agent should maybe be the same as talking between agents ?

agentic computing seems a little brittle.

a good process manager framework should allow mocking of each part, so we can test isolated parts of the system.
arrange all the modules in a workflow, and test each piece individually, then test them stacked together.
or, presume a system state, and then test each piece with different system states, rather than tangling them together.

? but how to get agents doing this task for us ?

