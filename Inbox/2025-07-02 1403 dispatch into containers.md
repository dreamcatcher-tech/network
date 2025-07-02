
>[!tip] Created: [2025-07-02 Wed 14:03]

>[!question] Targets: 

>[!danger] Depends: 

instead of useArtifact, we could pass in, as part of provider context, a function that can load up a container, check the scope is valid, check the permissions, then execute the action ?

useArtifact is needed, but somewhat only to dispatch actions around.

the host container, because it is all trusted code, we could run this without isolation, since the context sharing seems perfectly fine, so long as it is global ?

we control the global scope, so just making it be whatever we want is fine ?

Makes debugging easier.

Also less overheads, and slightly better performance, slightly less complication.

So if each napp just assumes it has global scope, which it should since we should be globally isolated, then using context hooks like useArtifact becomes very simple.

// we need a new container for a new scope
// so each tx needs to load up its own container
// it needs to verify that the branch location is valid.
// hard code the fiber to exist already.