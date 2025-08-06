
>[!tip] Created: [2025-08-04 Mon 20:13]

>[!question] Targets: 

>[!danger] Depends: 

plus can do high perf queries on the data.
offer a query language over it, that uses LLMs to process the data in pipelines.

by offering a provisioning agent, we are giving you a way to super fine tune our own infrastructure to best suit your needs, do complex balancing logic, price adjustments, plus suggest helpful things.

We remove a lot of our own complexity and give it to the user to tweak with, whilst being managed sensibly.  The choices we make should not be those that user could control to get more of what they want.

Our agent can help them troubleshoot as well, if they ask what the problem is.

Agent can do complex provisioning tasks, can also act as a helper for other coding agents trying to achieve a task.

Can spin up sandboxes to test ideas with.

llm can also run edge tests that benchmark your perf from all round the world.

basically brings all the benefits of the dark edge service to a plain application interfact that everyone understands.

the client would make connections to multiple consensus nodes, so that it had in built resilience.

provide a sharding key, where we can map parts of a key to a dedicated chain, to avoid overloading a central chain.

web browser clients can download urls, and we provide services that map this to the right chain and retrieve from it.
Web clients can have multiple connections to these url provider services, for resilience.

Web clients can also resolve down to a hash, and then fetch the hash from whatever bucket can be found.

by using llms to handle things like scaling, we can make something that doesn't have to be ready to automatically handle shock loads, which is hard to do, and hard to test, but instead we have a simple llm that watches the load, and makes decisions to fire things up or down based on the current status.

be able to show people exactly all the machines their data touched.  We can audit the location of the data.  We can show you where the data is stored to prove the resiliency calculations.  But it also doesn't go in unknown places - you can set geographic fences and other types of rules.

They can see what was touched by the signatures on the commits.  By design, the data has not gone anywhere other than those nodes.

take advantage of content addressable systems for their guaranteed synchrony.  the value that backs a hash is not changeable, so once you are aware of it, you can repeatedly try to fetch it.  you need synchrony if you want to map a mutable value like a file path to a hash, but if you have a commit hash you can work with that.  This means we can provide LFS storage using these nodes, which can avoid having to duplicate the data around the place, since the storage chain has all these big files on disk, and provides them over the network to peers, where the peers request them by hash, so there is no confusion over mutations or checks to get the latest version.

### storing large binary objects with strong consistency:
if it is a single machine, then we have good put controls
also a chain that shards out the binaries can also provide consensus acknolwedgement that it has been stored.
it can also tolerate mutable values by using the chain for finality - it seems hard to give it anything but strong consistency.
storing it in one place, we can let you know that it is there but not part of quorum yet.
then when consensus is reached, then you know its on other nodes.
You could upload different pieces to different nodes, if you declare it separately ?
or you could trigger them to go fetch, then process, then store.
Would use a different storage layer than lmdb.
might use the actual disk ? or use a separate lmdb instance with chunking.
need some processing for dedupe.
run initial pass at full fat, then start breaking it down into chunks to dedupe.  Charge for the dedupe cost, but the benefit is that monthly storage can be reduced.
should really do rolling comparisons, like what rsync does, to dedect dupes.  Possibly with bloom filters.
