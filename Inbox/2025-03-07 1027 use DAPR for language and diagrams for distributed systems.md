
>[!tip] Created: [2025-03-07 Fri 10:27]

>[!question] Targets: 

>[!danger] Depends: 

https://dapr.io/

Basically, if we could just all agree on what the standard API is for such a system would be. It might be as simple as defining the RPC formats and storage formats. If we can agree on all of those, then we can allow people to implement however they please. Because it largely doesn't really matter if we're going to be at the absolute limits of what the thing does. Then people can wrap it in their own language and add niceties, but the fundamental primitives (like TCP/IP) can remain in place and be evolved and improved independently. 

We could perhaps represent each branch as an actor and provide a strong mapping between our system and the actor model.\n\nWe may want to add additional things like storage shared between multiple actors and other types of helpful mechanisms that can extend the actor model. 