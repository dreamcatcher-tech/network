
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