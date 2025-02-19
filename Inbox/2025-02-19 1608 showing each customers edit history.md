
>[!tip] Created: [2025-02-19 Wed 16:08]

>[!question] Targets: 

>[!danger] Depends: 

In the event logs, we should be able to show where it got overwritten.

If we store with each file, what commit and what branch made the change, then we can walk back very rapidly.

If there was a merge, then we would provide a merged view, where the array represents the parents, in order.

So if we're doing a merge, and there is a conflict, then do the solve, but include the prior commits from all sides.