
>[!tip] Created: [2024-10-09 Wed 15:11]

>[!question] Targets: 

>[!danger] Depends: 

Should take the git commit, and then splice itself onto the git history, but without attaching the history to the remote branch.

History is recorded inband, not in the git structure, so it looks like a squash merge.
More exotic versions might allow data that is missing, but not sure how clients will react to that.

Basically the tree comes in.  
This would be in the `.napps/` folder.  
There would be a napps.json file that linked to each hash based filename.
Done because the names of the napps might collide, but the hashes will not.

The names in the system are modified to avoid collisions.

Json file states what its installation parameters are, like the mount point, chroot.

Basically this is `ntab` the napps table