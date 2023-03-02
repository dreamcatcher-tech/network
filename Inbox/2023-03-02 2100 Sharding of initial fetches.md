
>[!tip] Created: [2023-03-02 Thu 21:00]

>[!question] Targets: 

>[!danger] Depends: 

Getting everything from other nodes if you start with nothing is a common operation and may be done by both validator nodes and browser nodes.

We could say that we want everything in the tree that is within two hash bounding ranges.
Then the server would walk the tree, depth first, and mark all paths that have at least one node on the path that is in range.  All the inrange nodes as well as all their parents are sent to the requester.
This effectively shards the request for a complete catchup, and does not require the client to walk, where walking would cause many round trips, since hash based systems never know what the next thing is until they read the current thing to get the hash of the next thing.