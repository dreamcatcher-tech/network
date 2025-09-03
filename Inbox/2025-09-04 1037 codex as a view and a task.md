
>[!tip] Created: [2025-09-04 Thu 10:37]

>[!question] Targets: 

>[!danger] Depends: 

taking the simplest version:

a tool call goes out to start a face with an agent.
if a face viewer comes in on this faceid, they would see the running codex terminal session.
so it would have been started in a viewable way, as part of a tmux session, and this would be available on ttyd.

this is considered a task / face.
it may have some initial params, if you wanted to start it and give it a job at the same time.

then an 'update task' command comes in, which is giving this agent face a task to do.
it is completed when the notify action is triggered.
it pumps its contents into stdin and presses enter, synthetically.

we can start the face with the initial prompt to send in to codex.
the agent task framework is therefore only ever plain text ? what about making it do actual function calls ? would these function calls be handled using a different mcp server ?

is an agent that can control these things reuqired to be set up first, since you can't change your mcp servers midway / dynamically ?

codex can be run turn by turn, using exec.