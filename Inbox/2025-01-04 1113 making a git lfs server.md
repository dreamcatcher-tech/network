
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


granary project is good for deno compatible code.
https://github.com/milkey-mouse/git-lfs-s3-proxy simple js script that passes all requests thru to a B2 backend.

Very simple to make our own repos use the lfs protocol directly, but can also make these files available using a traditional client, or they can download the files using the web and then push them into their own lfs server to connect up with the repo.

Ultimately, we should present LFS files as a conventional filesystem and under the hood use git so we can manage versioning and integrity and permissions.