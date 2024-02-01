
>[!tip] Created: [2024-02-01 Thu 17:07]

>[!question] Targets: 

>[!danger] Depends: 

If multiple actions are run concurrently, then they have the ability to modify the filesystem concurrently.

This means that the output files can be dependent on the non deterministic interplay of the processes, making repeatability nearly impossible to achieve.

So when they return, it should be a commit, and they would have operated in isolation until this was done.