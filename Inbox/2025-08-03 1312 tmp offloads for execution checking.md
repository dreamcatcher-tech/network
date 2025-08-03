
>[!tip] Created: [2025-08-03 Sun 13:12]

>[!question] Targets: 

>[!danger] Depends: 

when the git servers get overwhelmed, they could bring on helper servers that would stand in for them, so they are in effect delegating their checking work to another server.

this is simpler than trying to manage a fleet of background servers that are marshalled by the data server.  it just says, I'm a bit lagged right now, but here's my buddy that I trust to act on behalf of me, and they're going to act as me temporarily.

this is better than trying to securely move keys around too.

the delegation can last for N rounds, or until some time, or some other condition.

or it could be a full permanent swap, where it uses its key to novate, or transfer on, its responsibilities to this other server, which will act as tho it was it.

so if its spread of repos gets too heavy, it can novate out to some other server.

this can also be used for load balancing as well.

each host could expose its load, or its queue size, so people can see how stressed it is.

hosts could configure their own failover in the chain, so if they go offline, here is their standby that can come back in and act as them.

if each member also nominated a sequence or a pool of replacements, then we can have very strong systems indeed.