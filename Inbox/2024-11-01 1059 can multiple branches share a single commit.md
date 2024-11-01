
>[!tip] Created: [2024-11-01 Fri 10:59]

>[!question] Targets: 

>[!danger] Depends: 

unwinding deep call chains results in a large number of commits.

If each branch had a file at a specific path within the branch control filesystem, so we could commit to it in a single hit, and update all the actions.

The max action rate of the branch is the rate at which new commits can be done, and how many changes can be included in each commit.  If the hashing was offloaded to threads, and if we generated a pack file directly, this could be maybe 10k / sec.
So when pooling, the incoming thread can compute its updated io file and hash it ready for inclusion at max rate.  

If the io object is already reconciled and hashed, then the controller only has to do the directory tree changes.

Sharding of the control branch: 
If we split the folder structure somehow, then separate threads can handle each section, and so merging together only requires some very light directory updates before doing the commit.  So with this model, it is practically unlimited as to how many changes can be handled in a single branch.  It will always be significantly faster than the work being done, and the control overhead should be 1% of compute and storage access.

Then all control data can be compressed and discarded at whim, and the changed files remain the same.

The branches could be isolated per purpose, or per user if sharing a repo.

Using this system, we could have a git repo for control, and use a pijul repo for file changes, to experiment with, just to prove a concept where control is completely separate from data.  

Make a particular branch for all this, that only held the io files.

Means the whole sweeping network of execution branches can always have a single hash, which represents a guaranteed snapshot position.
Acts as a supervisor tree.

So only the actual files and execution that changes the files need to take place in an actual branch.

The exe branch represents then the refs folder of the .git folder.

This structure can hold git commits that point to branch tips, so it can be completely the contents of the refs folder, but like a meta commit, where this commit chain is interpreted differently, and can be expanded out to be the refs folder.

This would provide the max possible thruput in terms of branching.  Execution of a batch of branches could be done with a single queue action, and all the branch actions get unpacked rapidly, quickly, then execution can begin.

We can make the file change branches be controlled separately, so the git history never pulls in the control layer.  All these experience commits, and inside the commit message, or inside a single special file, they would see the commit of the supervisor tree.
This mirrors how git gets used, since the dev makes changes and from the branch perspective they just magically appear there.

The control plane could be subject to consensus, which would mean that all the branches could be independent and not transmitted around at all.  Also the branches could be running on separate consensus groups, to spread the load.

Pooling still required as all the individual executors report back their results and transmissions.

There can be multiple control branches per repo.

Key is that we get given the hash of the whole process tree each time, which can be used as a reference to ensure repeatability.

If this data structure had an easy way of knowing what actions needed to be executed, then we could batch them off for processing.  The sharding should group things in the same branch together, so that caches benefit the most.

The runners should detect when they're saturated and send a new action into the db for processing automatically ?  Deno deploy seems to reuse isolates but not sure if this is in the same ram space.  If we took control of that, we might still end up in the same ram space anyway, so seems best to let deno handle all the spin up.

One queued message for each execution, with possibly batching if there are too many messages to queue at once.  Then the guaranteed execution is a separate layer, outside of git, that is just a reliable execution with great scale parameters.  Then we can test this item totally separately of anything gitlike, as this is just part of the environment interface.
