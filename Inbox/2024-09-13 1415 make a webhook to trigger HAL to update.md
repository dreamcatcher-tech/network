
>[!tip] Created: [2024-09-13 Fri 14:15]

>[!question] Targets: 

>[!danger] Depends: 

This webhook would hit the main deployment, and would cause us to do a pull.

Each time an actor branch runs, that branch checks the update trees all the way down.

Gets its parent, walking all the way to the root.  If the root is different to the last parent, do a merge, then pull that thru down to the current branch, which gets updated before executing.

May make this manual for now, since seems a bit of work otherwise ?
Could run a client side checker that can warn when an update is needed ?