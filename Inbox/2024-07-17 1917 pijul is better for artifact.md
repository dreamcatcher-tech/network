
>[!tip] Created: [2024-07-17 Wed 19:17]

>[!question] Targets: 

>[!danger] Depends: 

It makes the branch tip tracking be the only thing that determines a branch, and then only makes changes to files, not actual commits.

So a branch becomes much lighter in pijul, and many small rapid changes are easier to handle.

Can we make a compatibility layer between pijul and github so people can have surety about their data ?

Makes it easier to have a continually synced view of all the branches, so we can search the thread files based on a unified view of all the different branches.

Thread files are special in that they are guaranteed to be conflict free.

In git land, a complete unified merged view of all files could be expensive, pijul makes this very light.  So threads could be grouped by ones without conflicts.

The complexity of adding a file change, in large directories, is O(1) for Pijul, but O(n) for git.  If Pijul had its top level snapshot built using HAMT structures to make it very efficient, then it might be an extremely well performing module.  If we can insert this structure in early in the project, it might stick.

We could write specs for what each function in our port of pijul does, and so we can test if the module works correctly, since most of the code checks would be done for us already.  We could then abstract out artifact to use either system.  Then perhaps automated code builders could try repeatedly to solve these things, so we have a js port ?