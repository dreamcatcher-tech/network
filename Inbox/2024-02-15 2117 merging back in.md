
>[!tip] Created: [2024-02-15 Thu 21:17]

>[!question] Targets: 

>[!danger] Depends: 

Should do a git pack on the files
Memfs should keep track of what are the new objects that were added.
Only these items should be added to the base system.

Rudimentarily we can just do a directory walk where we put any files in the incoming that aren't in the target - copied over.


Deleting things from the store would need to get headlock for.

get everything working good enough, then set some baselines for performance so we can try to improve those.

memfs would be used for objects right up until a branch or a merge operation.
At that point, the memfs copy would be turned into raw kv inserts.

Then using pack files, we would store the pack files off on s3, and keep the index file inside the kv store.  Or keep both in s3.  Or keep some kind of fs lookup so that we know it is present.

Then this gets pulled in from s3, cached if needed, and takes all the load off the kv store.

So, the kv store is never intended to be the long term store, so we can not waste any optimization effort on it.  The long term goal is the object directory being backed by s3 using pack files

Backblaze can do edge replication, so we can be close to the data.