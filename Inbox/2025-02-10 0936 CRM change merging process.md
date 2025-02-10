
>[!tip] Created: [2025-02-10 Mon 09:36]

>[!question] Targets: 

>[!danger] Depends: 



Client knows its changes have been applied when the mw branch has its changes.
Client knows its changes were rejected when the changes branch loses its changes.


Client knows its changes have been received by the artifact server when they have landed on the changes branch.  
Client knows its changes were accepted by the moneyworks server when the changes branch receives a merge with the mw branch, and its changes are still there.

If the merge comes in, and the changes we put in get clobbered, then we know we need to try again.


If we pull from moneyworks and it overwrites the client changes ?


Is there a cheaper version, since this is only in place until the moneyworks server gets replaced ?

process:
1. push to the changes branch
2. watcher of the changes branch triggers
3. mw pull is initiated, to ensure we have the latest items


So the changes branch would actually be the hamr branch

So don't do any moneyworks merge back into changes until all the changes in the changes branch have been applied to moneyworks.

Or, store the previous commit along with each record, so that we can rapidly walk changes.
Then clients would watch to see if the commit prior changed from what they set it to, but the changes remained the same.

Or clients could watch the moneyworks mirror branch, and specifically watch for their changed files.

Have red orange green states, for the saving process steps.


Simple form:
1. client reads mw commit id
2. client commits to changes, and awaits further commits on the changes branch
3. the next time there is a merge that pulls in from the mw branch, with a commit message "merge mw branch" client can check ?

With the simple rule that we would never merge mw into changes while there were outstanding changes, so that all clients, whenever they saw a merge come in, they would know for sure that they either won or lost.

Changes could also refuse to receive new changes until the new changes had been merged in, so it could block editing, or make saving wait.  Could be a time delay thing, if we couldn't manage to keep up with the rate of changes.

Ideally we would be off moneyworks before we get the load up, so for now, just these changes are sufficient.

Fail to save (go from red to orange) means that another change that affects your file happened before you could do the save.  This shows up as a special type of error message, and so when they go to edit, some fields have changed, and some dirty fields might be clean.

While editing, we should warn them if someone else updated the file before they hit save, too.  These are general conflict rules to keep hold of.

This tracking of commits has issues when merging.  We need to, in a merge commit, keep track of both, so we update the file ?  It has to point to two commits now.  It would have to be part of the merge commit.  It could point to just the commits, and which branch is chosen by the order of the parents in the merge commit, so no need to reference the parent commits directly ?  This means we could walk merges.

Ideally this would be outside of the data, and tracked by git itself perhaps ?  Or by using indexes on the repos, so we can look things up rapidly ?

Store changes separately as a merge queue or a diff queue, and we delete them when we merge in to changes branch.  This means that minimal space is stored for the change, since it is only the change.  Explicitly ingestion into the moneyworks system, since diff is removed.

Moneyworks can merge in to changes as many times as we want, whenever it wants, and it is up to the sync service to handle the merges in, and to update the changes queue.

This would work well for triggers that need to react or update to the changes, like changing a customer record needs to change a bunch of other things, like pickup schedules.

The changes can include user info ? and can be reference by the file, so we can know who made the change ?

So we need some kind of inboxing ?
Lets us see everyones pending changes at any given moment, then we process the actions.
Good for receiving email messages, also when a workflow requires humans, so we can see what long running step functions are in progress.

If each user had their own branch, and then they signal a PR to merge into the main branch, and trigger off whatever needs changing ?

Have a jobs queue, and each changed piece of data references a job by commit and path, so we can always see why it changed ?  The job references the data by commit, so we can walk the history rapidly.

? How can we detect when a conflict has occurred in mw before even trying to write changes ?  Basically the changes file would be based on something that has changed ?

What if a job was a PR ?
So the user can make a large number of changes in a branch, and then the job is actually a PR attempt.

Processing the PR would trigger changes that need to occur.