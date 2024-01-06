
>[!tip] Created: [2024-01-06 Sat 16:28]

>[!question] Targets: 

>[!danger] Depends: 

If we store the HAMT in binary form, or a text form so that git can diff it nicely, then it could be a folder structure that we can maintain using code logic, but that works well for gits commit logic.

For example, if each Stuck was its own repository, then a scale invariant list would use a HAMT style set of buckets as folders to rearrange the storage information.  Walking the tree would get to a particular stuck.  Git would be able to apply delta compression well, and we would have a fast limitless folder which could be delicated retreived from without needing the whole thing.

The trie could use hashes, and could have trigger levels where a bucket is too full so it rebalances just that piece.

Instead of writing all this code in logic, we can run NL checkers on it.