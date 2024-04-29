
>[!tip] Created: [2024-04-29 Mon 13:44]

>[!question] Targets: 

>[!danger] Depends: 

If we create an index, then attempts to do ls should look up the index first.
This would be stored inside the .git folder structure, and it might be sharded.
If should match paths to hashes, so that we can look at the current state and start walking, using the index wherever possible.

Here the index can drift, and be batch updated, but will be quite useful often.
Particularly for deeply nested paths, the index would be significantly faster.

Could store a shadow copy in kv store directly that maps full paths to oids, resulting in instant lookup.