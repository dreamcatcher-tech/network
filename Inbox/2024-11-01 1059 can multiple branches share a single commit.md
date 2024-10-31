
>[!tip] Created: [2024-11-01 Fri 10:59]

>[!question] Targets: 

>[!danger] Depends: 

unwinding deep call chains results in a large number of commits.

Would be great if a single branch could be updated with its reply, then all the follow on 

its as tho each branch had a file at a specific path within the branch tree, so we could commit to it in a single hit, and update all the actions.

pijul suits this very well, since each file is 

In git, if we did filesystem sharding, we could handle these updates.
Or, just use folders to represent parents of branches

What if there was a particular branch for all this, that only held the io files ?

Means the whole sweeping network of execution branches can always have a single hash, which represents a guaranteed snapshot position.
supervisor tree.

So only the actual files and execution that changes the files need to take place in an actual branch.

The exe branch represents then the refs folder of the .git folder.

This structure can hold git commits that point to branch tips, so it can be completely the contents of the refs folder, but like a meta commit, where this commit chain is interpreted differently, and can be expanded out to be the refs folder.

This would provide the max possible thruput in terms of branching.  Execution of a batch of branches could be done with a single queue action, and all the branch actions get unpacked rapidly, quickly, then execution can begin.