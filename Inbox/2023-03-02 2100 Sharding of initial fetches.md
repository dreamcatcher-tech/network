
>[!tip] Created: [2023-03-02 Thu 21:00]

>[!question] Targets: 

>[!danger] Depends: 

Getting everything from other nodes if you start with nothing is a common operation and may be done by both validator nodes and browser nodes.

We could say that we want everything in the tree that is within two hash bounding ranges.
Then the server would walk the tree, depth first, and mark all paths that have at least one node on the path that is in range.  All the inrange nodes as well as all their parents are sent to the requester.
This effectively shards the request for a complete catchup, and does not require the client to walk, where walking would cause many round trips, since hash based systems never know what the next thing is until they read the current thing to get the hash of the next thing.

If initial fetch was purely a stream of blocks, then we could provide a shard key to only get blocks within a shard range.  The control channel responds when each request has completed.

If a particular node is slow, then we can modify the range of the request while it is happening, and expand out to over nodes by asking for a new range, or explicitly expanding it.  In order for maximum network utility to occur, data should be nearly purely random.  If it is not random, it has not been deduplicated, dekeyed, and compressed.


Splitting the control and payload channels over different websockets may provide much better responsiveness.