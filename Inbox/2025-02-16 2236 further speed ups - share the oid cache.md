
>[!tip] Created: [2025-02-16 Sun 22:36]

>[!question] Targets: 

>[!danger] Depends: 

if the same oid gets used between any instance, we should share it.
blob cache and tree cache.

storing this as strings would be a slight overhead, but very compact, so we should do it.

So long as we don't bleed anything between compartments, as long as things were always walked down logically, using a commit and a path, we should be able to use the oids between different caches.
