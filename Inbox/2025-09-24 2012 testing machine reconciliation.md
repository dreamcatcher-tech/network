
>[!tip] Created: [2025-09-24 Wed 20:12]

>[!question] Targets: 

>[!danger] Depends: 

if the machine reconciliation was virtualized, then we could inject errors and see how the system handled it, like timeouts, and other kinds of problems.

So we would just be checking that any kind of problem booting up an agent was gracefully handled, and have strategies like starting a new hot standby if present if the time budget was being blown.

Additionally a machine should go grab its lease off the nfs filesystem, to make sure it is in the right place, and it is still assured to have the lock it requires.  This could be part of the secret passed in the fly replay header, and if it matches, it can unlock the filesystem.

we should use fly machine leases to be exclusive in what we do with each machine.