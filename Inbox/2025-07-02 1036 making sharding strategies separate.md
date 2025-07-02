
>[!tip] Created: [2025-07-02 Wed 10:36]

>[!question] Targets: 

>[!danger] Depends: 

Within git, we should be able to make different sharding strategies, and have them work independently of the git layer.

They should have some discriminator so we know we are in a sharded dir ?

They can have different properties, like some can be nested, others can allow fast listing.

Some can use trie techniques, and the pack based on the load on each tree, which means that the structure depends on the order of insertion sometimes.  Some are deterministic, others depend on the content, and can allow freedom within the layout, so merging requires computation.

Merging functions can be different - some require recalculation, others can merge without conflict every time.

Some take massive scale, some take moderate scale but have very low overhead.