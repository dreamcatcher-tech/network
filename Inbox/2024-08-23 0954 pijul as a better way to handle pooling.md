
>[!tip] Created: [2024-08-23 Fri 09:54]

>[!question] Targets: 

>[!danger] Depends: 

If we had a single file that held a large number of pool items, git requires that we reach a consistent view between all processes.  In pijul, instead of storing the individual actions and try to get them into a git commit, we could just patch a file, store the patches, and just assemble whatever we can get hold of to form the next snapshot.

But the same function can be achieved in git anyway, by just writing the files to disk.