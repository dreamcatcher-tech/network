
>[!tip] Created: [2024-09-09 Mon 11:34]

>[!question] Targets: 

>[!danger] Depends: 

Signal down to the client that it should do some things, like resent the localstorage.

How to update already running actors ?

Maybe whenever a request to do something new comes in to the actor, it triggers it to pull from parent if the parent has changed ?

What about running in a branch ? when should we pull ?

Flag to set a branch as being always pulling ?  So some branches can be frozen, and others always merge in their parents.

Sandbox action is to take the most recent thing from the parent, until you change one of the files.

## Updating the actor base
Need to get an action in to this base branch to do a pull.
Use the navigator to set the focus of the thread to be the actor base branch.  This would be included in additional information.
	Navigator can be an agent.