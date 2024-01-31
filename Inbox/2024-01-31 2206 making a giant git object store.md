
>[!tip] Created: [2024-01-31 Wed 22:06]

>[!question] Targets: 

>[!danger] Depends: 

Because git objects are hashes, 

They do have some structure tho, where trees indicate closeness - so retrieval time can be greatly improved by storing in a graph rather than completely flat and relying on hashes to distribute the keys around.

The storage could rebalance based on how it was accessed, since it indicates it will likely be accessed again in that same way.