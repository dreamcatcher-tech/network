
>[!tip] Created: [2024-03-28 Thu 10:39]

>[!question] Targets: 

>[!danger] Depends: 

In this way, we can have a canonical view of the repo from the root.

This would be the equivalent of the packedrefs file.  

Periodically we can sync the branch names in to, like whenever there has been enough change.

Might include the tip hashes, or we could do that using a series of merges to handle that.

These special sync merges could be done in stages, so we are free of scale constraints.  It syncs in its branch names to the parent, and the the parent only syncs itself to its parent, so we can get huge numbers but they all stay in sync.

Should be periodic, rather than every commit, so like every 5 mins or so maybe.
