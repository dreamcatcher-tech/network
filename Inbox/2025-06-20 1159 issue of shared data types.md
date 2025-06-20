
>[!tip] Created: [2025-06-20 Fri 11:59]

>[!question] Targets: 

>[!danger] Depends: 

Different frames often need access to the same shared data types. I'm not yet sure what is a nice clean way to share napps between them so that they can draw from the same schemas. We could use existing package formats or we could use the Transglued package format which would have a more unified view and a faster deployment cycle as we skipped the registry.

A no-bundling registry seems like a good thing, where we're really just sharing a Git commit that has met a certain minimum standard. This makes it available quicker, and the provenance is more obvious—nothing got destroyed or deleted. It makes it easier to fix with a unique problem that we might find from its usage.

Even simpler, rather than importing the types directly, it might be possible to simply have the generative AI read from what these types are so that we don't actually need to strongly bind them. It's just something that testing shows and that the AIs have read around and included the knowledge in there. There's no reason why it has to be tightly linked, that was really there to handle humans in their restricted amount of labour they can apply. By making the bondage be mechanical but if it's bonded by an intelligent agent that seems just as good, maybe even better because it's lively and aware of nuance. 