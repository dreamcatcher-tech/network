
>[!tip] Created: [2025-03-29 Sat 10:01]

>[!question] Targets: 

>[!danger] Depends: 

issue is that the gitKv layer needs to make itself again.  In the provider implementation of the tip functions, it actually calls gitKv, so if gitKv needs to call a version of itself again, this could be problematic.

extract out utility functions from tip, so we can pull up the files in a simple way.

But there is caching in the tip, which would be nice to take advantage of.

We would refuse to write to the `artifact-consensus` branch unless in our stripped down version.
Must be able to read from it, but we should block anything going to it.

Then if we want to implement sharding for this branch too, things get tricky.

So how to treat it like a genuine filesystem branch ?  We are already running in a context, so we can call provider functions directly.  Make  a form of tx that doesn't create actions in between.  It just calls implementations directly.

we may need to have file pattern filters for this branch that only permit an allow list of files. 

almost like we need a full version of artifact inside gitkv, and it is created for anything that isn't this base branch.
but it needs to be able to write to the `artifact-consensus` branch too, since we need to update permissions and other items.

So if its writing to its identity branch, its using gitkv directly ?

Where would config and other things be stored for its own branch ?
suppose it just reads them directly ?  So even when operating on its own self, it still reads from the artifact instance that it has created.

Almost like we need to split out the read and write functions ?

Its like theres two types of gitkv fs:
1. The one for reading from the object store
2. the one for reading the git config

So they could provide different features, like the object store version need not worry at all about config, head, etc

readCommit, readBlob, readTree - all they need is reading of the object store paths.

Also can just be switch statements, if we are in the id branch, then revert to direct reads, else use the artifact that wraps the id branch.

another way is to replace the calls to repoStore with ones that do the switch automatically, so the logic of the gitkv can remain the same.

Use the direct methods of the providers without tangling up the full, pleasant, user facing artifact.
Usage of git requires a flush, where multiple changes all get committed to the underlying id branch.

readConfig would first check we still have the current tip of the id branch, and then would buffer the new file up, waiting for commit to get called.

Might just fill in the RepoStore interface, which makes things pretty easy.
If we are not in the id branch, use a gitKv instance that is in the id branch, else if we are in id, use the provider methods to do direct writes, and build up a buffer in the upserts and deletes arrays, then call flush to create the commit.

?does it ever write multiple files ? yes.

make two repostores, one for direct id branch, and one for everything else.