
>[!tip] Created: [2024-09-27 Fri 11:24]

>[!question] Targets: 

>[!danger] Depends: 

Fetching in batches can cause duplicates to be added, since if a commit has two parents, and then we walk down each branch, soon there will be the merge base, and this will be added twice, once for each branch.

If splices was a map then we can deduplicate easily.

Ideally the new commits would be added in ahead of the original one, if their timestamp was newer.