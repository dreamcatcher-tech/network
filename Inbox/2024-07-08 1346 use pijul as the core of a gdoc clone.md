
>[!tip] Created: [2024-07-08 Mon 13:46]

>[!question] Targets: 

>[!danger] Depends: 

Since its all patches, it might be a better way to do a google doc ?

We need a special file, that hashes all the patches that represent the current state of the repo.

This is the thing that we would sign for consensus.

We only need the latest patch of each patch tree.

This could itself be a patch which made no changes by pointed to all the decendents that it unified together.

Or, we could sign each patch tree independently, and we try and make these unified versions ?

The unified version can be derived in this case, and the signatures need not be on this complete thing, since each patch would be submitted to a tendermint round.  These container patches can be decomposed, since you can treat each one as saying that any portion of the tree below is valid too.

Only rule is never sign anything that conflicts, so we can all modify things periodically.  If you need to back out of something, since you've commited to an orphan branch, you could sign a reversal statement ?

Could have a filesystem tree that pointed to the relevant patch of each file ?
Could also list every file that had ever been there too ?
Trace dir contents back by way of patches changing the dir hash ?