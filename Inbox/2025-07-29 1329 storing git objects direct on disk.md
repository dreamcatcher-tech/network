
>[!tip] Created: [2025-07-29 Tue 13:29]

>[!question] Targets: 

>[!danger] Depends: 

the fastest way, might be to use the actual disk itself, attached to fly.io, as the object store.
if something is damaged, we just go out to the peers and ask for that object, and repair it.

if we keep using LRU purging on the objects, and are regularly packing loose objects, and then possibly offloading them to bucket storage, then we have a very flexible storage mechanism.

consensus could be set up for say, live execution, 

failover modes:
1. hero - if a node is alone, it keeps going, for max uptime
2. team - requires a quorum to move forwards

can also do failover of the storage, not the compute, so I might have execution requiring 3 concurrent our of 4, but then I might have storage be replicated across 8 nodes.  Can show the stats, locations, and strength of connection between the nodes.

nodes can set up relays to help move traffic around, where they tunnel info on.

if these read capable nodes are spread around the edge, then they can respond very quickly.
knowing what latest is requires finding one or more of the quorum nodes ?
data store should know about latest, from its perspective.
perspective of others, depending how much the client cares, means finding the others and getting a quorum.
It doesn't matter that much, since latest is still latest from your point of view, and if you get later ones, you just fast forward.

on fly, we would permanently trim the volumes by destroying the machine, and firing up another one, which would begin the load balancing process.

Later, people can run these machines on their own hardware.

This design cuts out a very large number of layers and complication, and gets use raw hardware perf, with a remarkably simpler design.  quorum is easy, as all nodes can participate in a dht that lets people find nodes that are part of a particular git repo.

we can then use things like libgit2 to handle fs io in an optimized way.
store each repo as what git itself would see on disk, gaining all the optimizations that any git instance would have.  We purge by removing whole repos, or evicting pack files out to s3 buckets, and leaving a marker there.

a local ipfs could be used to sync things quickly.  or just do it as something git aware - ipfs does better load balancing.