
>[!tip] Created: [2024-10-24 Thu 11:53]

>[!question] Targets: 

>[!danger] Depends: 

If we abstract out what it is that git provides us, then we can switch between pijul, git, or just nothing.

So running without a persistence layer, or using only ram, means that all the functions work the same, but there is no long running storage.

Additionally if we abstract out [[2024-10-24 1050 abstracting the kv queue |the KV queue and KV store]] then we can provide these items to the function.

This means that the artifact engine logic can indeed run inside a compartment, and can be nested inside of itself forever.