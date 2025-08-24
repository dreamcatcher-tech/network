
>[!tip] Created: [2025-08-24 Sun 22:15]

>[!question] Targets: 

>[!danger] Depends: 

central server that holds the git repos.

git repo gets a request to spin up an agent via mcp.

artifact data host calls out to the agent host to start an agent or resume an old one.  


Resume carries all the info needed to recreate the state, so has the same end result - if there is a suspended one around, it uses that.

the scalable version, has a fly app for the codex agent, and this thing spins up new versions for each request, but probably it starts as a single container that does it all, and just segments the requests by actor id, so by session.

we could present the codex cli as an mcp server ?
so we would provision the environ

easiest seems to be connecting stdin stdout with commands that come in from the web server ?
? could wrap that in mcp ?
stdout could just be the thing that gets streamed down to the client.
late connecting clients pull the whole cached file first, and then get fed streams from the list of subscribers that can handle multiple connections.

sending in actions like cancel can be done via stdin too.
if we go pure fs, then we can present filebrowser or editor too.

isolation:
1. one docker container per session
2. one big box with many sessions and many checked out filesystems

use fly suspend so that next time, the agent starts quite fast, then based on timeout or something, do a stop or a reset, based on spare agent pressure.
We should be able to run each one in a little jail, but this is extra work vs just giving it the whole container, and the container is the jail.

Aims:
1. one container per session.
2. stdin / stdout is guaranteed to be stable.
3. vscode hosted on each container to give full filesystem access.

therefore we have a setup process and a freeze process, that makes the session recoverable.

there's bugs in the mcp implementation, so not sure how deep we want to go down there.
plus their protocol, we don't really trust it.


vscode server on each container, present multiple agents together using nfs or something to join filesystems.  Then drive that ui thru mcp, using agents to control it if necessary.

fly was saying to do one app per user.  keeps billing isolated.  also blast radius.
probably need families of machines for different tasks, like node, rust, python, or all.

each git server controls an execution pool and manages it, so in lockstep, clients can connect to multiple concurrently executing things.

read the stream as an mcp resource operation, using an http link.
mcp boots and kicks off and resumes the turn.  the process and filesystem are provided by direct connections.