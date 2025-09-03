
>[!tip] Created: [2025-09-03 Wed 22:38]

>[!question] Targets: 

>[!danger] Depends: 

if you don't specify, then you'll drop in to one based on load balancing.

if you specify the id, then you'll get that one specifically.

a new view will make a default tool call.

for codex, that would just start the codex tool in async mode, and then you'd connect to that.

it could allow any other command we like, and this command could be changed on the fly for new views maybe ?

the task mcp server that each agent opens up should also allow for running a general purpose shell command.

in fact it might just be an open shell too.

1. shell command( path, args, isAsync )
2. entry command() - just runs whatever was set to with whatever config, like async or not, piping along stdin / stdout