
>[!tip] Created: [2024-03-18 Mon 11:58]

>[!question] Targets: 

>[!danger] Depends: 

on cloud, if a new commit is made faster than the remote watcher can be notified, then a stage file has moved on and has no knowledge of the previous one.  But, with fs still locked at a given commit, errors can occur.

? is atomic viewable to all as atomic ?

? how can we only deal with the actual head ?
1. When triggered by a watch, we can re-read the head value, and confirm it is the same

Writes would be given by the fs, deletes is the only thing that needs to be handled differently.

Watch will skip writes that occur quickly sometimes.
We can catch this up by making a watch that gets the log and then uses the log to catch up.
The watch is view only, rather than something critical to correctness.

Track the count of the log items we are up to already.

Problem is that fs is reading from a specific commit, but stage has moved on.
If we are not head, then use the tree only.
But we are going to remove the stage concept ?
Stage only matters during the current execution, so it never needs to be stored.
If fs changes were stored in the isolate-api accumulator, then this removes the need for a seperate staging concept ?
At commit time the last tree is pulled up and modified with the changes.

Init should do a first commit so we have a tree to work with ?

Reading in from a remote chain should be by way of a merge.
It would be a system call that merges this remote in, and then lets the continued isolate read from the files that were merged in, by reading from the files that same way any other remote request would have been made.

If FS was locked to a commit, then checking if a file exists should skip staging.
BUT when reading commits only, there is no transient file state to consider at all.

Ensure we throw if try to write when are not the head commit ?  This is intimately bound up to holding headlock tho.