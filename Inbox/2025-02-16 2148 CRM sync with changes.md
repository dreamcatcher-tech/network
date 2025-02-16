
>[!tip] Created: [2025-02-16 Sun 21:48]

>[!question] Targets: 

>[!danger] Depends: 

simple:
clients attempt to commit onto main, and then retry if they missed something, stop for user feedback if something they are trying to change has been altered from the base they started with.
mw syncer works with the latest commit it can see, reconciles those into mw, then before it merges, if there are new changes, it reconciles those changes, using the diff of whatever it can see between changes.

At the same time, if it sees new records that do not exist on changes, it will merge those in at the tip, so changes always has the latest versions.

So any new records on the moneyworks branch will get merged in to changes as a matter of urgency, and any changed records, these will not get merged in until all the changes have been merged in.

Worst case the server could be kept busy and never complete the merge, as a stead stream of changes go in on the change branch ?

If there is a conflict, then the server would merge the authoritative view back over the top.

Clients know their changes are applied if there is a merge of the mw branch after their commit and their changes survived

New records might be the first thing to get merged into the tip of changed.


## v2 each user has own branch
Each user is operating in a fork of the changes branch, and ties to push to the server.  If their changes cannot be fast forwarded, then they will attempt a merge.  Once they have merged, then they will wait until the mw branch merges in to confirm their changes made it to the mw server.  This model works fine when the user is offline.  So long as we have good conflict resolution mechanisms.

This relies on each client fighting to do the merge.  It means that user temporary files, like rerouting or other things, are stored as branches on the server, and can be retrieved as such.