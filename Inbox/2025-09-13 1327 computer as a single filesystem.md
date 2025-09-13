
>[!tip] Created: [2025-09-13 Sat 13:27]

>[!question] Targets: 

>[!danger] Depends: 

coco agent as a single process running on the shared filesystem - this is a mutable view of the filesystem.

the computer is the static filesystem, and the agents mutate it.

once they all connect using NFS, this is more true.

They should somehow link the coco runs to commits in git, without having to translate between them all the time.  Also docker layers are the same hting, as BH pointed out.