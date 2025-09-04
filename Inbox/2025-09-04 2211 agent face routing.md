
>[!tip] Created: [2025-09-04 Thu 22:11]

>[!question] Targets: 

>[!danger] Depends: 

once the agent has been found, as in its name is located, then the calling agent needs to be able to point something at it to initiate a face, it seems it has to be routed there ?

? how should inter computer access work ?

if we don't use the router, then we end up using direct network traffic.

We should be able to hit it using the internal ip6n.

Once we know the machines name or path, we can resolve its dns address.

then we're on the private network, within the app, 
? there should be some kind of security in there maybe ?

config can be used to say who can talk to a given agent or not.
parent can always talk.
others might need active permissions.
this seems a lot like the interbit models.

starting with no permissions, we present a web mcp server that

the originator is presented with a server that does the switching under the hood based on which agent was requested.

So its interface is given a machine path to connect to.
but the receiving side is a stream web based mcp server.
this streaming server receives the exact calls, but it doesn't receive the agent id information.

self is just no outbound agentpath ?

should interaction id's include the face too ?
simplest function is just:
- agentId
- faceId
- interactionId

interfaces were the personification of computing - now we're back full circle and it seems like our forefathers have left us a gift of simplicity.

searching for supported face kinds could get large if there was a freeform set of faces.
can deal with that later, but it looks like a deep research type of discovery, with a test and find out thing, plus possibly a commissioning phase.

each agent presents a web server mcp that gives the face interfaces to it, and throws if the agentId does not match itself.

it should be the exact same server logic ?
one is stdio and makes connections out to the web based version of itself.
it should maybe just confirm it dialed correctly ?
keep connections around a few minutes then shut them down.

so we'd have a face control system running in each agent.
this would be interacted with via an mcp server.
definitely need the face client mcp server running in each agent, which is how it reaches out.