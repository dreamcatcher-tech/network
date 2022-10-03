>[!tip] Created: [2022-10-03 Mon 14:59]

>[!question] Targets: 

>[!danger] Depends: 

When an engine is running on a server somewhere, it could be enabled to interact directly with its hosts command line, piping commands to and from a remote user and the local posix shell.

An advantage is that every command and its output is logged.  This can be taken further and a restrictive set of commands can be permitted only.  Triggers and warnings can occur when certain output occurs.  Sessions can be completely replayed.

Multiple servers can be interacted with simultaneously, with exceptions and errors being separated out into their own shell easily.

GUI can be constructed for the shell commands, since we know all possible inputs for most commands.

DAO based voting could be implemented so that before any command was executed on the server multiple participants had to approve it.

Monitoring of groups of machines can be done by them all sharing chains with each other, so there doesn't need to be a dedicated logging machine, or orchestration server - they can perform this function together, pooling their resources, and moving those resources around as required.