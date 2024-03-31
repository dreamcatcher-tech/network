
>[!tip] Created: [2024-03-31 Sun 20:16]

>[!question] Targets: 

>[!danger] Depends: 

So instead of writing to the db with the pool item, each one tries to make a commit, but also broadcasts its commit so that each one tries to merge its commits into the head to make the biggest possible one ?

Just saves writing to disk with the pooling item.

Pooling is the key fan-in mechanism.  Queue is the fan out.