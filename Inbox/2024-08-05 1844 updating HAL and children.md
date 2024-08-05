
>[!tip] Created: [2024-08-05 Mon 18:44]

>[!question] Targets: 

>[!danger] Depends: 

Want to trigger a pull on the root repo, as the superuser.
Pull from github into the base branch.

Somehow trigger all the actor branches to update too ?

If the actor branches, each action, automatically pulled in the parent branch, if anything changed since last time ?

Then if children, each action, pull in from parent ?
but not every time, since that pollutes history ?
Maybe merge in from root actor directly ?

If there is a config flag set to NOT update, then ignore, otherwise we keep on pulling the parent down to the child.

An active pull is when the root would trip the children into doing something so that the merge takes place.  If it was done this way, then watchers would be updated too.