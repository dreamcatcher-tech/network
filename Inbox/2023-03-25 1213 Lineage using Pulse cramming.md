
>[!tip] Created: [2023-03-25 Sat 12:13]

>[!question] Targets: 

>[!danger] Depends: 

Lineage need not be a merkle tree, but can be crammed Pulse too.  This structure can be advantageously walked to rapidly build up a lineage gap between two pulses, for when a browser has fallen out of sync with Quorum, but has some prior data.

The current pulse just stores all the nodes in the tree (possibly a HAMT) within it, so that we can know what the rest of the tree is by looking at what the current tree references.

If we knew how many pulses back we wanted to go, then we could calculate all the pulses that we would need to fetch instantly by walking the tree of the current pulse.  We know how the tree is laid out, so we know where to enter in the branches.  This may not be single lookup, but it would be much less than linear.

Basically, we might not need Lift as a protocol, as bitswap may be sufficient, particularly if the lineage trees are designed in a way that favours bitswap.