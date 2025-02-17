
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

## v3 flag the changes
If whenever a change is written on to the changes branch, we include a flag that marks it as changed, or make a file that marks it as changed, then when it gets pushed into moneyworks, once it is deemed identical, the flag is removed, which signals in sync ?

## issues
how to know when the modified files came from moneyworks or from the changes branch ?
diff with the last time there was a merge of the moneyworks into the changes branch ?

Could use the config file to write when the changes last occured ?

With each record, we could store the commit that it was last changed in ?
This means the records get re-written when they get synced ?

Write in each record its source of change, so moneyworks tags its changes ?  This then overwrites in changes once the sync occurs.  It does bin a bunch of files tho, based solely on a single field change.

For each modified file in changes, walk back to the last moneyworks merge, where an ancestor of the mw branch was merged in to changes.  Can use time to stop doing endless walks.

In config, store the last commit in changes that we were in sync with, right before merging.
Or, in the changes branch, store the last moneyworks commit we were in sync with.
So given the changes branch, we diff with the commit that last synced with moneyworks, and then we know if the change was from us, or from moneyworks.

So where to store this info ?

Should we only write all the updates to the changes branch only when we are fully reconciled ?  What about when the users are changing things rapidly ?

If we turn into terse 