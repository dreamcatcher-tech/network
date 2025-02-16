
>[!tip] Created: [2025-02-16 Sun 21:48]

>[!question] Targets: 

>[!danger] Depends: 

simple:
clients attempt to commit onto main, and then retry if they missed something, stop for user feedback if something they are trying to change has been altered from the base they started with.
mw syncer works with the latest commit it can see, reconciles those into mw, then before it merges, if there are new changes, it reconciles those changes, using the diff of whatever it can see between changes.

At the same time, if it sees new records that do not exist on changes, it will merge those in at the tip, so changes always has the latest versions.



New records might be the first thing to get merged into the tip of changed.
