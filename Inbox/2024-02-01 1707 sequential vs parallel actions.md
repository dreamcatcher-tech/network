
>[!tip] Created: [2024-02-01 Thu 17:07]

>[!question] Targets: 

>[!danger] Depends: 

If multiple actions are run concurrently, then they have the ability to modify the filesystem concurrently.

This means that the output files can be dependent on the non deterministic interplay of the processes, making repeatability nearly impossible to achieve.

So when they return, it should be a commit, and they would have operated in isolation until this was done.

Or we could only process one action till completion at a time before doing the next one.
This is great for repeatability.
Works great for our use cases right now.

? when would multiple actions get generated ?

If the action is happening in a branch, then we could do unlimited parallel actions.

