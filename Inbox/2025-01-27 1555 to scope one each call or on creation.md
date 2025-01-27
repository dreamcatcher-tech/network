
>[!tip] Created: [2025-01-27 Mon 15:55]

>[!question] Targets: 

>[!danger] Depends: 

if the deno kv store methods required a scope for each call, is that better or worse than scoping to the instance ?

Issue is that if scoped to the instance, then we need a way to make a new one each time, rather than giving it to a provider.

Might be able to compact the interface stack if we don't have a provider interface, but rather just have provider implementations, since we don't want to have different ones ever.

Then the context implementation would just depend on the providers directly.

So providers interface could move down to the providers folder, and not be in the api.

Context could be the holder of the api too, since we aren't going to have any other ones.

We will have multiple versions of stores, but everything else will likely stay the same.

Providers have to be 

But what about separating by web interface ?