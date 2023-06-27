
>[!tip] Created: [2023-06-27 Tue 16:00]

>[!question] Targets: 

>[!danger] Depends: 

When storing data in kv stores, and then when updating only one value in a json state, hashing the whole thing again can be wasteful.  It might be cheaper to store the hash along with some diff instructions, so that when the hash is fetched, the system knows it needs to rebuild it following some instructions.  This can result in less disk storage being used.

The choice of diffs would be entirely up to the storer, since to peers it only deals in hashes.  If a peer is known to have something already like a prior block, then it can transmit patch instructions to it, unless the node asks for "full".