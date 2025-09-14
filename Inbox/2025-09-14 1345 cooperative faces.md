
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

each time we start a new face, we run a ttyd server for its background process, in readonly, and present links to let you browse to it.

trying to do with the inspector face:
- starting an arbitrary web service using an mcp tool call from within codex

want to boot into codex

starting codex faces from within chat, and from within the cli

every face launch includes a background ttyd shell, since it is running as a shell anyway, so you always get a ttyd view.  This might be interactive, allowing face control on the cli ? or just leave that alone ?

testing interactions in the codex face.

start codex with some altered config options, then with some changed sys prompt.

if I pick the starting ports, and treat that as the known good face, using some vars from the shared lib as our startup config, then we can always have that face online.

so we would have a command face, which starts up any command we like, makes the view optionally interactive, and enables interactions in some way ?

how do I get smax working on this system with me ?
how can I get the system doing the design work to reason thru how the system should work, make the tests, etc ?
seems tricky to test because of the deployment step requiring human interaction ?

starting an inspector face seems to crash the system, which is annoying.
seems it needs some help to get its ports right, and seems sometimes it collides with our port that we are listening to.

starting a codex face ought to spin up the interactions, too ?
so we should be able to, with just codex faces, on a single agent, make an agent system that can do work that helps us.

the test face didn't have a backing command, so no need to report a view.
a face should be able to change its views dynamically ?
so a bash face that started a new view each interaction, essentially, would keep updating its views.

faces need to present as mcp objects so that llms can control them.

? should the inspector be started automatically, to enable debugging ?

the face not being allocated a port to start at is causing collisions ?

faces themselves might track some state, like what the last used port was, so it can increment predictably up ?  
choosing a random port seems actually annoying.

so a well behaved face would be given a start port range and then would increment up predictably as new instances of the face were started ?

go thru the features, and one by one enable them, and then rejig them as required.

face creation should show the ports and url and stuff of the views, so the UI can easily trigger them.
it should also be expressly available via mcp, and the model should be able to drive the browser to navigate.

what do we want to see on the landing page ?
start with a single codex cli that is interactive, and that everyone sees the same page.

live faces need to show what ports and views they have.
this makes it easy for the user to open them.

landing face can be done in code, then pulled out into config later.

landing page should, if it isn't an mcp call, proxy thru to a ttyd service for the default face, so the default face can be on any port, and we just decide to proxy thru to it based on the incoming request.  
