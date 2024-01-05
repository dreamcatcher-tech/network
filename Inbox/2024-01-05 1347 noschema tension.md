
>[!tip] Created: [2024-01-05 Fri 13:47]

>[!question] Targets: 

>[!danger] Depends: 

Before an agent starts to operate on the filesystem, it should declare its intent, so that we can recover the execution if we restart.

They should lock sections of the filesystem to ensure no collisions occur ?

Each process is controlled by the supervisor mutex, and to be invoked has to do so via the supervisor.  When the process is done, a commit is called.  Or, a commit then continuation can occur.  After a commit, the lock must be renegotiated, so polite programs can give the system a chance to breathe.

The mutex is a central router that has exclusive lock on the proc.md file which shows all the processes that are occuring, status, cost, etc