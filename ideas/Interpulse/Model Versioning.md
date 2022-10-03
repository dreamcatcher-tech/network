>[!tip] Created: [2022-10-03 Mon 11:45]

>[!question] Targets: 

>[!danger] Depends: 

Models are controlled using the IPFS ORM, but we may at times need to read from old versions and process in new ones.

If the models folders were published as an independent package, we could import whatever version we needed for the chain we were trying to process.

There are two types of versioning:
1. Static versioning, which is the shape of the IPLD data
2. Class versioning, which includes the methods available on each hydrated class

## Questions
1. Would we need to import the old engine too, as it has behaviour that might be relied upon, as well as the static intefaces of the data ?
2. Would we only ever seek to do an upgrade, so further processing is never a goal ?