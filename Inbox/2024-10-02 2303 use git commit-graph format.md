
>[!tip] Created: [2024-10-02 Wed 23:03]

>[!question] Targets: 

>[!danger] Depends: 

When speeding up commit navigation and logs, we should copy the commit-graph format from git, to speed this whole process up.

Might also be able to make our own pack index, optimized for storing in dbs, so we just store the object key in the kv store, and the blob is part of a pack file, which is periodically compacted on B2.