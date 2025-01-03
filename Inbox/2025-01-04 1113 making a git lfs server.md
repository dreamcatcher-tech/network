
>[!tip] Created: [2025-01-04 Sat 11:13]

>[!question] Targets: 

>[!danger] Depends: 

would use the same credentials as artifact.
Would allow us to use LFS for internal repos.
We should be able to clone repos that have LFS objects within them.
Lets us work on very large files, like movies and mp3s and images.

Lets clients upload straight to b2 and download straight from there, without bothering our deno deploy services (other than to auth).

The paths to the objects would be using repo ids, so the permissions check would be based on the repo id.

? secure deduplication between repos ? 
If we stored the objects purely by hash, then we can deduplicate between repos.
To delete them, we would store a count of how many repos referred to that item.