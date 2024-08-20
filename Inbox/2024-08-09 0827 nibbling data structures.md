
>[!tip] Created: [2024-08-09 Fri 08:27]

>[!question] Targets: 

>[!danger] Depends: 

Make a set of data structures that specialize in being operated on when they are very large, stored efficiently in hash based filesystems, retrieved and interrogated, all without loading much into context.

Be able to know the structure of the object, and create a patch to update it, without having to read the whole object into ram at all.

Need to have some special rules for merging, since if we are pushing to an array, we want to handle that specially to avoid merge doing an overwrite