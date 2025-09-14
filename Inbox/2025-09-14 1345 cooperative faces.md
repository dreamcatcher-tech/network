
>[!tip] Created: [2025-09-14 Sun 13:45]

>[!question] Targets: 

>[!danger] Depends: 

if the face knows how to talk to the agent server, then it can do a little more ?

the agent server should present itself as an mcp server ?  but this might have created the same problem that agents were intended to solve, anyway.

So if you land initially on the face of the agent, and it could be anything we like.

it could be a dedicated tmux face that is configured a certain way.   it could be a web page face.

the face needs to speak face protocol.

but what is the unit of use we are solving immediately ?
- agents that can be sysprompted
- agents that start with a git repo

we know we have the unit of coco, which is what we are selling, or promoting.  One use case, is with the agentic computing model.


power user v1
- land on base page, get presented with a dedicated codex terminal, and a specific git repo.

make a new codex face by using url params which act as args, so you can prompt the agent faces ?
can list all the faces on the agent.

could make an entry script that takes some specific args in as url params, which get sanitized by the internal proxy.
so if we allow those args, we can pass thru thru to tmux, or to the face in question ?

Each face should have its logs available in a backstage read only ttyd view

common public landing page version:
- browser we've never seen before lands, they get a new codex session, stripped of tools to make other agents, and can only chat about the project at hand


at boot, there is a root face, which is running so that if you know its port number, you can connect to it and see the full blown agent logs.

make a little script so we can interact with the agents in cli, that mimicks what mcp can do, and also mimick the config file for options.

