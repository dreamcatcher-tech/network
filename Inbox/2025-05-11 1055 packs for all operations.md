
>[!tip] Created: [2025-05-11 Sun 10:55]

>[!question] Targets: 

>[!danger] Depends: 

Many operations, particularly in it and clone, would go faster if we stored the objects in a pack and then saved it. What we would do is if we were going to write this pack, we would pull in the previous pack and see if we are on a pack threshold or something like that where we would keep the new pack or we would repack the new item. Once the repack is completed, we delete the old one, etc. We should probably mark things for deletion so that we don't have errors if the process crashes part way through. 

This is the single biggest speedup that we could give this system. 