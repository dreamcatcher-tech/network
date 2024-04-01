
>[!tip] Created: [2024-04-01 Mon 22:15]

>[!question] Targets: 

>[!danger] Depends: 

Problem is cleaning up garbage might kill some new activity.
If we have a counter that is used on all object writes, then we know we can safely clean up objects that are not at the current version.

Means we can do lengthy fsck operations without having to worry about locking, since all new material has a higher counter.