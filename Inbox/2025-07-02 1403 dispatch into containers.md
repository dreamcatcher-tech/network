
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

isolation at the repo level, or at the napp level ?
if the same container ran for every napp, then we have no isolation between napps.
if we run the same napp with conccurent invocations, between repos, that can leak between repos.
same napp concurrent invocations on a repo, this is good enough, but requires async local storage to keep processes separate, which adds complications, and difficulty debugging.

lastly, one web worker per request per napp per repo.
start a new container if you want concurrent operations.
reuse containers when they become idle - only start a new one when busy.
This seems easier than relying on async context within the container ?
gives each process a dedicated cpu, rather than having contention within the container ?

provider can have a separate worker per did, and then just share context between everyone with the same hooks ?

this would limit concurrent running effects since they would only run one at a time ? or the parallel would not be able to share context between them ?  We could throttle them, so they have to run linearly, but that seems annoying ?

So maybe leave async in place, but just run it at the worker level ?  
or optionally be able to run it without async, and turn it on or off depending on the context ?

or, concurrent for a repo / napp pair, then just share global state between them all ? so no async required ?

might want to limit concurrency to avoid commit conflicts anyway ?