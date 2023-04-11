
>[!tip] Created: [2023-01-06 Fri 09:58]

>[!question] Targets: 

>[!danger] Depends: 

If a language was made so that all objects were internally always hashed, and the heap was considered universally shared, then we might be able to write things faster.

We can provide a notion of this language on top of the blockchain system, but it would be faster if implemented natively.

Perhaps IPORM can give us a form of this, but using functions inside JS.

Huge benefit is on multitenant systems, the hash table could be shared between all running isolated contexts.  This would act as memory protection and deduplication.  It should also be able to work even if the content took several years to locate and load, as execution would be paused until it could be retrieved.  So the memory can be much larger than the machine ram, as well as using the machines ram highly efficiently.

## Operations
### Equality


## Fetching
Once have a handle on some content, could inflate it from anywhere.
Store has special meaning as it depends on the amount of replication you want.
We are basically moving all interpulse operations to be language features.

## Hardware
perhaps some hardware optimizations are possible, if the language or use case was async await.  Hashing could definitely be offloaded, ram deduplication can be hardwired.
Ram addresses could be hashes.
Ram and disk could share the same address space, and so ram is just cache for the disk.