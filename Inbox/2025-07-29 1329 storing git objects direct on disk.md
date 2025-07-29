
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

probably best to use a kv store, like a log structured merge tree, so that we don't burn iops on many small files when writing lose files.
like rocksdb.

we should always pack these, and write the packs straight to disk.

loose files hurt iops, so we store each one in its own on disk path.
periodically we purge by packing out to disk.

Pretty sure that each server is entitled to store the data any way they please, since requests provide a pack based on what the client says it has.

We are leveraging that git has highly optimized for single transfers, which means its very good for sustained transfers, and for synchronizing between swarms with a few little helpers.
If nodes in the dht advertise what tip they have, which is the normal case, then anyone trying to sync or repair, can ask for different sections from different nodes to spread it around, but they can ask for a small chunk from a slow server and a big chunk from a fast server.
Git optimizes its lookups for computing packs based on requests, and since it can do it really fast for one client, it can also do it really fast for several, as solving for one is solving for all.

It has great incentives, like integrity, speed, compactness, wire efficiency, low latency, security.

What we treat fly machines as should be the same as individual laptops and machines in the field - they auto adapt, are managed on chain, and self balance amongst trusted groups.
With fly, the only difference, is that we can expand the storage easily and we can spin up more machines in a few seconds.

or, if we had multiple machines, storing in ram might count as one level of consensus that all machines could signal, and then to disk was a second one.  So first store in ram, then after some period of time with no new writes, read in the latest pack file, and append to the pack file with these new objects, writing to the end of the packfile with all the objects of the last 5 seconds.

periodically combine the pack files, so we write down new files.

the signal is ephemeral, so it can update without problems.

this method should work for very large files too.

This method should be able to work for streaming down changes to files, if we attach a pipe to the file being written to.  This means we can use this method for video calls and other useful things.

as an intermediate, we could just write direct to disk on the server, and use file locking to ensure atomicity.

if we used sqlite under the hood, we might not need to store a pack.
we could run one sqlite per repo, and then just store the whole sql file as a backup ?
this db could provide rapid lookups, as we could maintain metadata about the commits in these db files ?

or just stream out a single large pack as the backup (packup) and then replace the previous packup.

so maybe have a sql or rocksdb for all the loose objects, then pack to disk periodically, and use git inbuilt systems for rapidly indexing and answering queries about what objects to fetch ?
backups involve actively flushing the db to pack, and then scoop up all the pack files.

have a single rocksdb for all the repos the machine hosts.  Make sure only one pack op taking place at a time.  Ease off if under heavy io load.

or use an fs like btrfs which is good for many small objects ? may be other fs choices that avoid the need for a db.

LMDB is crash consistent, so best mode to use.