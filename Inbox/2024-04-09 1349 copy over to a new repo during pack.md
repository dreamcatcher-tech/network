
>[!tip] Created: [2024-04-09 Tue 13:49]

>[!question] Targets: 

>[!danger] Depends: 

We can remove all dangling items by making a new copy of the repo, and intercepting all incoming requests to read or write.

While the operation is occuring, we can passthru the reads and writes if we do not have the item in the new layer.

Once finished, the old layer is deleted, wiping out any garbage.