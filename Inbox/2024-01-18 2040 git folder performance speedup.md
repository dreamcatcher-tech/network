
>[!tip] Created: [2024-01-18 Thu 20:40]

>[!question] Targets: 

>[!danger] Depends: 

If we make a HAMT using git folders, then we can translate a large folder into this structure without modifying the internals of how git works anyway.

So the changes and lookups would be efficient, and would not choke a single directory, which could be slow.

We can provide tooling to decide when to switch buckets.
Can provide extra utils for navigating these types of tree.

We could maybe use the LLM to do the HAMT in pseudocode, so we don't have to explain it, or maintain it ?