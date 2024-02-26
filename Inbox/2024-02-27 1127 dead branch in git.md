
>[!tip] Created: [2024-02-27 Tue 11:27]

>[!question] Targets: 

>[!danger] Depends: 

If we allow branches to be pruned periodically, we may still want to store reference to how it came to be, but we don't want the git structure to think it is missing objects.

We also do not want to rewrite all of history, since this can be expensive to compute.

So it is useful to periodically offer a structure that is purposefully marked as a branch that is optionally available or not, depending on storage constraints.

This could be stored inside the filesystem as a marker, or in the commit message.

Or we could drive the repo with the knowledge that some branches will fail fsck.

It should still be able to operate without these branches available, and a tool should be able to reassure us that this unavailability was expected.