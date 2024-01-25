
>[!tip] Created: [2024-01-22 Mon 11:21]

>[!question] Targets: 

>[!danger] Depends: 

Whenever we want to read from another process, we should only be able to view things that have been committed back to our current branch.

Otherwise, we cannot recreate the read.

We could store the commit of the read, and then when replaying, verify that this commit was available roughly at the time it was made ?

Reading then, should force a merge into the readers branch ?  Guarantees the availability of the other branch.