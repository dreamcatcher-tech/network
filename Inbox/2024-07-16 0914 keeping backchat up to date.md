
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