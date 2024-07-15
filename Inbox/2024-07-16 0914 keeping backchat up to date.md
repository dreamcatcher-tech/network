
>[!tip] Created: [2024-07-16 Tue 09:14]

>[!question] Targets: 

>[!danger] Depends: 

Because threads happen in branches, but backchat needs to see whats currently in them, we need to sync the files to the backchat thread constantly.
Each time a relay action goes thru backchat, the reply is a chance to sync in the thread file.
But we want ONLY the thread file, and not whatever else might have changed.

This thread file should be protected, too, so it doesn't end up being altered in the branch ?

Since backchat is a peer, not a parent, the sync should be to the master branch.

So then, backchat actions should relay thru master ?

All children, when thread changes, should merge with their parent.

Each time backchat runs, it pulls from the master, so it always has the freshest files.

Backchat should never have any files in it, it simply passes things around.

Only when backchat asks, does it go to master and get it to pull on all its child threads to sync them in.  This is a system level action, that pulls in every child, but only if there have been changes to the files of interest.

Or, make backchat have a way to read into the threads directly, without need to do a merge request in.  It would read and take a snap of what the remote hash was at.  It might merge in the items it read from ?
We could track which branches are dirty, so we can quickly know what to pull in, and it still be repeatable.

Backchat keeps its local view of the threads up to date at all times whenever a reply comes back.