
>[!tip] Created: [2024-02-15 Thu 14:34]

>[!question] Targets: 

>[!danger] Depends: 

Often the same isolate is called again, for similar messages, so it might be able to keep the git fs around in ram.

If we stored the HEAD in the kv store, then whenever a commit was made, we would update this.
If the isolate knew it still had the latest version, possibly because it was the one that created, then it can use it again.

Ultimately, the writes would only be the changed objects in the object store.

If we stored the object store as keys in the kv-store, using direct sha-1 hashes, and we intercepted any function calls to get this info out, then we would not duplicate anything in the kv store.

Running gc and packing the objects would cause the kv to change since it would invoke delete functions.

This also allows merging seamlessly, as we just add to this global kv store as it will always be collision free.  Then when a merge comes in, we know we already have these objects.

Also the cache becomes very useful, since it is just an object cache.
Delete can also delete the objects from the cache.