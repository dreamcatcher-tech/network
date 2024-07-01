
>[!tip] Created: [2024-07-01 Mon 14:22]

>[!question] Targets: 

>[!danger] Depends: 

If we set a lock flag at the parent branch, then we expect that all children will honour that.

So these locks would be part of the commit conditions of the children, where they check the conditions of all the parents.

If locked, then we abort.

When moving a branch, we want to lock all the children and ensure that all processes were quisced

So we would gain lock, then drain all the pools, then do the move ?

When pooling, we must reject if the branch is closed / removed.

Or, with a move, allow a redirect to occur so that anything in the pool simply got moved over ?

Reject all actions with a redirect code, and give them the new location to redeliver.  Needed sine might need to sign again if remote chains.