
>[!tip] Created: [2024-07-17 Wed 19:17]

>[!question] Targets: 

>[!danger] Depends: 

It makes the branch tip tracking be the only thing that determines a branch, and then only makes changes to files, not actual commits.

So a branch becomes much lighter in pijul, and many small rapid changes are easier to handle.

Can we make a compatibility layer between pijul and github so people can have surety about their data ?

Makes it easier to have a continually synced view of all the branches, so we can search the thread files based on a unified view of all the different branches.

Thread files are special in that they are guaranteed to be conflict free.

In git land, a complete unified merged view of all files could be expensive, pijul makes this very light.  So threads could be grouped by ones without conflicts.