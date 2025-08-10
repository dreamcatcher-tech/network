
>[!tip] Created: [2025-08-10 Sun 12:03]

>[!question] Targets: 

>[!danger] Depends: 

can call for tree objects, commit objects, blob objects.

uses get, so should cache.

may make it an external resource link ?

make tools to rapidly sync down a given tree, and reuse the cache as it does it.

the caching should be handled inside the browser, to avoid rewalking large chunks of the tree, so if we know we have a cache hit, then we don't dig any deeper.

do all the tree requests first, before any content, but still allow hoisting up the queue by making a request directly.