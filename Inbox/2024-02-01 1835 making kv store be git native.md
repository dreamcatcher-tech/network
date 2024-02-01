
>[!tip] Created: [2024-02-01 Thu 18:35]

>[!question] Targets: 

>[!danger] Depends: 

Given that the kv store has a limitation of 64kb files, and given that git files are automatically compressed, then we SHOULD be able to store the git folder directly in the kv store.

Modifications should use atomics to ensure we are always writing to an ever increasing copy.

Especially since git is additive, this system would mean we would not have to pull much, and when changes occur, would only be storing the diffs.

An isolated view of the git folder is merely a detached head state.

So the FS abstraction that writes to the store is the best way to handle git.
We should key them by their hashes, so common content is deduplicated.  We would count the duplication counts, so we could know when to delete something.

Archives move infrequently accessed things out to s3 snapshots, which are mounted in memory.

If we implement the IDB interface of lightningfs, this might be all that is required ?
This would be a stopgap until OPFS is implemented.  Or something else like NFS with snapshots.