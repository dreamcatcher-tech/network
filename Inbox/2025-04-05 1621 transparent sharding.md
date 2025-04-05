
>[!tip] Created: [2025-04-05 Sat 16:21]

>[!question] Targets: 

>[!danger] Depends: 

If we sharded under the hood, since we use `isomorphic-git` for very little inside the tree itself, then we could collapse it down to regular git trees whenever we did an export.

Then we rebreak it when doing an import.

This simply means that our internal data structure uses pointers for tree objects, and just breaks them up internally.

This might not be feasible since the hash of the complete tree still needs to be computed, but this might be possible to do piecemeal somehow.