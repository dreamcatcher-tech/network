>[!tip] Created: [2022-10-03 Mon 14:59]

>[!question] Targets: 

>[!danger] Depends: 

When an engine is running on a server somewhere, it could be enabled to interact directly with its hosts command line, piping commands to and from a remote user and the local posix shell.

An advantage is that every command and its output is logged.  This can be taken further and a restrictive set of commands can be permitted only.  Triggers and warnings can occur when certain output occurs.  Sessions can be completely replayed.

Multiple servers can be interacted with simultaneously, with exceptions and errors being separated out into their own shell easily.

GUI can be constructed for the shell commands, since we know all possible inputs for most commands.

DAO based voting could be implemented so that before any command was executed on the server multiple participants had to approve it.  This can be streamlined where some individuals can do anything they like except remove the DAOs ultimate control.  In AWS, this would be like giving the DAO control of the root account, then giving individuals accounts with control enough to do useful work until they get kicked by the DAO.

Monitoring of groups of machines can be done by them all sharing chains with each other, so there doesn't need to be a dedicated logging machine, or orchestration server - they can perform this function together, pooling their resources, and moving those resources around as required.

## Usage
Server boots up.  Client mounts server chain.  Client then has a terminal attached where it gets its stream info from the remote server.

### Features
### Tab Completion
Tab can be treated like enter, and be sent to the remote side, to be executed and the results returned.  The terminal on the server side is always virtually blanked on each command, so there is no shared state to be managed.  Enter or Tab represent events that we expect a state change to
### Updates to the terminal
Anything that comes down the stdout or stderr pipes is truncated and then send as a request to the other side.  These cannot be replied to from the other side, as no action should be taken.

Batching is handled by reading as much as there is in the stream, then sending this on, then keep sending whatever else comes.  This is a pure character stream, and is replayed as such on the client end