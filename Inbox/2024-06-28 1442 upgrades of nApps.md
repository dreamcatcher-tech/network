
>[!tip] Created: [2024-06-28 Fri 14:42]

>[!question] Targets: 

>[!danger] Depends: 

When you pull from the original image, there should be some isolate logic that would try to pull in the changes upstream periodically, and would run some upgrade procedures.

If templates change, it would upgrade them.
Would do the bulk of the work and then handle any running changes that occured since the start, and then do a merge by locking the system.

Stale branches would get errored perhaps ?

This should really be a fetch from the upstream, rather than being branches that merge ?