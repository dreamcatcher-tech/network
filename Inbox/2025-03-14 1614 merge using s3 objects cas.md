
>[!tip] Created: [2025-03-14 Fri 16:14]

>[!question] Targets: 

>[!danger] Depends: 

We can only update one object atomically at a time, so doing a merge where we also delete the child branches is hard.

To solve this, we would do two commits ? One marks the branch as pending merge, and the other marks it as merged ?

Or, we add a tag to the object to indicate we are merging, along with the commit we intend to make, and the next, as yet uncommitted, commit.  If someone else wants to write to this in the meantime, they have to wait for at least the timeout period, or wait until the main commit is commited, which confirms the merge being done.  Those lock objects would timeout, so maybe it rolls back to the prior version ?

Another way is to keep the branches as a single branch, in a filesystem ?
This has the advantage of being moved forwards in single atomic moves, and represents the definitive state across all branches.

It can be used when reading across branches in the fibers ?
Maybe it should be the fiber branch too.  Limit is that it can only do one change to the branches at a time.

We could mark the branch as deleted inside the repo itself ?

We could also not worry if this operation is not atomic ? if we tried to delete the branch but then someone else wrote to it, does that matter ?

Acquire a whole repo lock, where we can do anything we want with guaranteed transaction guarantees.  Reads might get stale data tho ?

Store a separate deleted marker, next to the branch.

2PC on each commit - one to say we're planning to upgrade, and the second to say we did, with some recovery job doing cleanup on fail.  So we 2pc all the branches, and then we do the final commit once they're finished, except the target, since we just merge that one ?

But after that,