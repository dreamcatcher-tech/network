
>[!tip] Created: [2025-09-01 Mon 14:50]

>[!question] Targets: 

>[!danger] Depends: 

what about for a new app ?

what if it's just the self agent ?

it HAS to go thru artifact, but ultimately the execution of it could be the self agents ?

but we might defer this restriction ?

artifact could run on your home app ?

artifact provides recoverability, so we can probably skip that for now.

self agents can have a deploy key in their secrets.

the home agents would have an mcp server that they would allow other agents to access, as well as themselves.
when they call the right tools here, they would be able to create new machines, and store their mapping somewhere.
Probably just on their permanent disk for now.

So the home agent is only special because that is where external requests come in.
it has to check the clerk auth, and ensure that the url being targetted matches its own app.

mcp server on the home agents that empowers creation of new agents, which gets added in to the codex agent ?

or, each container has a /mcp server, which only accepts connections from localhost, which let it control the container ?

what if all containers could make new ones ? for now ?



the root computer is special because its fly.io deploy token is special, and lets it create apps, since it is org wide.

So the agent comes down to this single thing, where it has a proxy server that points at different agents as the lifecycle unfurls, plus a local mcp server that can create other agents, but sometimes can can create other apps, in the case of the home agent.
it can also tell the browser to hand off to another agent, and it can list available agents.

listing agents is done by way of metadata listing now, and this is altered by way of the fly api.
just maps machine ids to nice friendly agent names, and sets relationships like parent.
Each app can list all the agents using the deploy key.

it just makes images of itself.

So when you are the target / self, then the ttyd pointer thing works, otherwise you are the ttyd server.  At first, you point to yourselve.  If your agent calls handover, then you send handover to the browser.


