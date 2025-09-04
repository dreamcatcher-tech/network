
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

