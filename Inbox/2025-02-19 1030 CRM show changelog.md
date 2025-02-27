
>[!tip] Created: [2025-02-19 Wed 10:30]

>[!question] Targets: 

>[!danger] Depends: 

We can get this from the commit logs of the change branch.
We can intersplice with the mw branch, to know exactly when the moneyworks branch changed ?

Each commit log entry would include the user that made the change, and by comparing diffs, would show what actually changed.

The sync status would show up based on if the mw branch had been merged in or not.

The success or fail would be based on the diff with the merge commit, so if its changes were lost, then shows up red.

If a later commit, before the sync occured, overwrote the changes in the users commit, it would show up as modified / overwritten, which is different to failed.

Merges with the moneyworks branch would be shown as an mw sync, and the details of it would show the changed files, which you could click on and it would show you this view in a table, so you could then browse them at that point in time, for just what changed, or browse the whole filesystem at this point in time.