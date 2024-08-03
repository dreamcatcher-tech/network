
>[!tip] Created: [2024-08-03 Sat 15:54]

>[!question] Targets: 

>[!danger] Depends: 

If we ran a version of deno that used an in memory kv for locking and queues, then we could make a git version that used git on the filesystem to store all the bulk data.
This would likely have better perf than the db, and would avoid a lot of encoding.
Plus it could be scrubbed.

So the db would be for runtime locking, and the fs would be for long term storage with better integrity guarantees.

Could optionally write the files in multiple different locations to help recover from errors.