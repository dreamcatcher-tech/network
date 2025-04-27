
>[!tip] Created: [2025-04-27 Sun 22:49]

>[!question] Targets: 

>[!danger] Depends: 

when we get in the diff, we can treat this specialially in the persistence, and we can stream it into the on disk object store as an append.

When we boot, we load up this single file, and then emit out the objects into the object map, which is just the envelopes.

Each change, we just append to the blob store, and we learn to handle a torn file in the cache.

We could leave it in disk, and just read of disk as needed ?

Also server could send down pack files, done at the end of each day, for example.  Then the download is quite fast - just the pack file, and whatever else changed.

Packing the repo periodically helps a lot.