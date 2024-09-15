
>[!tip] Created: [2024-09-15 Sun 18:04]

>[!question] Targets: 

>[!danger] Depends: 

Can set up to be east virginia, and use ssd fronting.
Store branch pointers in the db, since they need rapid mutations, with consistency that relates to queues.

The object store is the only part that goes to b2.
Could allow uploads of large files to go via b2 urls.
Downloads of large files could be pulled from b2 directly with single use urls or some other method of auth for the client.

non lfs files can use the deno cache to speed things up too.

Use some stale ejection for the big caches.  

Make a single cache for each repo path, so they can be purged without dumping all of them.

May name by the hash of the first commit.

Timeout the items in the cache.