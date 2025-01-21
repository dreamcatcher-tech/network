
>[!tip] Created: [2024-11-04 Mon 13:37]

>[!question] Targets: 

>[!danger] Depends: 

If the execution thread got large, pijul would allow it to be operated by independent threads, and then merge nicely.

Also can operate on small pieces in isolation.

Could achieve the same in git tho.

Only advantage of pijul is good diffing since the io.json might need to hold accumulations open for many commits.