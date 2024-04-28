
>[!tip] Created: [2024-04-29 Mon 11:25]

>[!question] Targets: 

>[!danger] Depends: 

Once auth has passed, we want to move the browser and all its sessions over to be a child of the authenticated user chain.

Since the user and anon chain share the same base repo, this should be simple writing new HEAD information while also doing a merge operation, so that the branches get included in the permissions checks ?
So write some new heads, and then do some merges.
Uniqueness of the machineId is due to the branch name being derived from its keys, so no collisions possible.
Rewrite all the heads with a new commit representing their merge into the new user.
Ripple down the tree with this renaming, since each parent needs to spawn the child ?
Or, ripple up maybe ?

So make a test suite that can do this operation in a simple way, so we can assure the operation completes correctly ?

Probably at the start, we could just drop the sessions completely ?
Or do a manual copy over ?