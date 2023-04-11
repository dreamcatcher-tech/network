
>[!tip] Created: [2023-01-30 Mon 09:59]

>[!question] Targets: 

>[!danger] Depends: 

Some hashed items get used repeatedly, like promise replies.  If all the hashes in a pulse used a LUT to map index numbers to hashes, then we can:
1. Begin requests to get all vital pieces of the pulse faster, rather than having to walk the tree
2. Save space as the hash is 32 bytes, but a varint can be less.
3. Have some reserved address space for common system hashes, like a blank DMZ etc

Having a prepopulated dictionary can make many initial loads occur with less latency.