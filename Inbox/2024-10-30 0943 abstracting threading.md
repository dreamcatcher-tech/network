
>[!tip] Created: [2024-10-30 Wed 09:43]

>[!question] Targets: 

>[!danger] Depends: 

How we choose to parallelize might be different depending on the use case.

We might not need a full blown independent branch, and in fact could use the same process to execute this extra thread.

It would be quite a bit more efficient to just use the current process rather than going via artifact, with a commit, etc.

The commit should really be for spawning a new physical process, however the commit structure now becomes defined by the local resources.

So then, it should be set, and deterministic, so that all execution environments run the same way.

The commit should represent a certain amount of execution progress or energy burn, which if we standardize what this measure is, then we can actually use this to determine when to commit or not.

Means that commits never make up the majority of the operations, as it should be the computation, since recovering should be easier than redoing the computation, and if it isn't, do not do a commit until it is.

Commits should be about 5% of the overhead of the system.  

Some things need a commit, like an API call externally.