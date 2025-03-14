
>[!tip] Created: [2025-03-13 Thu 13:15]

>[!question] Targets: 

>[!danger] Depends: 

When deleting a branch name, we will have to actually store a tombstone, since we cannot rely on GET as being strongly consistent.

GET seems to, if something is deleted, return the cached data.

But if it always returned the latest data, then we could safely rely on it using tombstones.

What if we used a little local postgres to store the pointer to latest ?

The issue seems to come down to being able to get a consistent database-like view over exactly what the head is. We need to be able to move where the quorum is located.  This might imply that actually there are signatories to the commits and each signatory has a pointer and so the signatories could store the objects with their own key so that if you want an authoritative view, you grab one of the blocks, you figure out who or what that key would be and then you read them in and then you have the authoritative result. 

A container running in fly.io would be responsible for sampling across all of these different locations to get all the objects that match. They would use a variety of caching operations. 

we should be striving to use Tigris as simply a very low-latency, durable store that sometimes has consistency errors or caching errors, particularly around the notion of what 'latest' means. 

watching or triggering as a client would require you to tap into the real-time services aspect of the platform so that you could be broadcast to when commits are being made. These broadcasts would come in from multiple commit quorums if configured that way, or just a single one. 

we could do the branch deletes in one specific region only, and so that each repo would store what its home region is. If a request to do a commit is received, we would replay it back in the home region to ensure that the data store receives a consistent view. 

Try a double download - read the file, then get any newer files using conditional operators.

Run a postgres cluster per region, and allow migrating the primary region to other areas, so the compute can effectively be moved there.  The latest object could be based on a tigris object, but backed by a database, with most up to date wins ?  or, the whole db of the repo is put in an object ?

Have a subscription service which receives notifications when changes occured and is the query source for what latest means.  Have several of these servers in each region, and have several regions.

Have a single latest pointer for the whole repo, so each repo only needs a single hash to point to all the branches.  This means that the branches get treated like a sharded filesystem, and they represent the canonical view of all the branches, in a single branch, the meta branch.

This branch could then be rolled up into a special branch for the hoster, where
So basically we only have to keep one single hash current, rather than arbitrary many, which means we can quite likely have it be managed by a live running server, which is always on.

so if the host was managing its workers using branches and fibers, then it could have a single thread that held the latest version of all its threads.  This should be stored, but could be held in ram across multiple regions, and would be periodic, with the server quorum providing immediate results, and the multi region backups there for failover to other regions.

Set the metadata of the object to be tombstoned, and set the content length to be 0.
Now if the TTL was set, does that mean that everything will see the removed item, or will some items end up with an older cached version ?