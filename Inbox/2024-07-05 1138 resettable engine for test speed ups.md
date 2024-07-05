
>[!tip] Created: [2024-07-05 Fri 11:38]

>[!question] Targets: 

>[!danger] Depends: 

If we could reset the state of the engine then we can take snapshots and make our tests run much faster, but still have clean systems to work with.

So the engine would keep track of all the repos it had, and the latest commit of each.

A snapshot would hold all the refs of all the repos.  
If each blob that was written had a sequence number for its batch, then we would be able to delete everything with a certain version number ?
Or between snapshots, the layer number is increased, so to roll back to a snapshot, we delete everything in the db up to a certain point ?

Or, keep everything around, to let us jump forwards and back ?

So perhaps the snapshot is only possible inside any given repo, where we reset the head state ?

If all branches always updated their parent branch each change, this could mean a snapshot is just the main branch.
Make a mini commit as a separate data structure.  These could be part of the main commit, but if the main commit was ONLY these updates, then we would redo that final commit ?
So the ref on it is HEAD but then a secondary ref is HEADPLUS which means that the system is always technically fully snapshotable once the updates have settled, but we wouldn't have a bunch of wasted commits that were purely updates, since they get replaced each time.