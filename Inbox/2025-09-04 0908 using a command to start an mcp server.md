
>[!tip] Created: [2025-09-04 Thu 09:08]

>[!question] Targets: 

>[!danger] Depends: 

If we sent in a specific command, like start_extra_mcp_server then it would run the executable, and that would result in a new server.

could be starting a web server, whatever.

the results would go back down, and the calling app would respond accordingly.

so the top level mcp controls running a particular command, rather than a specific command ?
it has to be mcp so that bots can call it.

so if the top level was just mcp server that took in an executable command, and it ran that with a task id where you could access stdio, that should be sufficient ?

this means we can bundle up programmatically starting a command, connecting to a new server etc, so it can look like one command to a given model.  These ops could be scripted in config ?

So we have:
1. computer lifecycle commands
2. agent lifecycle commands
3. task management commands

which mcp server are you connected to is set in config, so our root servers would include the computer lifecycle commands as well as agent ones. These mcp servers would be excluded from regular agents.  Or if the agent had no business starting new agents, it would not have these servers.

cone each agent to only be able to talk to a limited number of other agents ?
this would show up in the list of allowed names or searches for agents that it can do.