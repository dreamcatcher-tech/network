
>[!tip] Created: [2025-04-28 Mon 16:15]

>[!question] Targets: 

>[!danger] Depends: 

Some form of caching in the browser is required, but we don't want to end up making the pack file format all over again.

But we might need some offset indexing, so we might just adopt the pack format.

Also some form of caching on the server is required, but here we might be best off using the actual pack file format, as it was built for this purpose.

The browser has a separate purpose, as it needs to eject data some times, whereas server must have all data.

It might be that a worker will determine the format - so if the worker works only in byte arrays, and then passes those back to consumers ?

want the store to stay in sync, but to have basically subscribed to a single store maintained by a worker, since this store is common across all tabs that are working with that particular repo.

Want lazy access to the object store, so it will fetch from ram in a map first, then from the opfs cache if present, then lastly by connecting to the server directly.

Object pool needs to be evictable when things are stale, and when pressure goes up.

Might make it a soft cache, where there is this sync in memory map, and if there is a cache miss, then we attempt in the background to fix this up.  Unless there is a current pull in progress, since that might fulfill it.  Rely on react rerenders to discover patched holes.

The store could be in ram, or on disk or whatever, but the shared worker just presents an interface where you can pull in objects by oid.
The pages can subscribe to changes in the object store, where they just pull in the latest version based on the version they have, and they receive a stream of envelopes they have to patch in.

On the server side, if we read a pack file, cache it on disk as best we can, and if we read individual objects, store them in an appendonly log, where we update an index file too, where the index file stays in ram, or just is always in ram, since on reboot in fly, we lose the disk anyway.

Still needs some integrity checking if we pull from the disk.

Use msgpack binary envelopes, and then push those to workers using zero copy transfers.