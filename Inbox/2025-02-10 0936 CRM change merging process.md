
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