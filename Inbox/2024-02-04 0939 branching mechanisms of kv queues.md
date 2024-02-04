
>[!tip] Created: [2024-02-04 Sun 09:39]

>[!question] Targets: 

>[!danger] Depends: 

Rules must be super simple, also recoverable, and reduce lock contention.
They should take advantage of the fact that many actions do not need the filesystem, and so don't need the full git checkout, or even the full git repo to perform their actions.

Rules:
- Each branch only tracks its unique children, to avoid bottlenecks.
- in band actions are processed one at a time
- spawn actions are all immediately dispatched in their entirety.
- must have write lock on a branch to begin running the processes for it
- an interupt action has the ability to halt the current in band action
- a parent has the ability to enumerate all its current children
- writes to the git repo are per branch, and so a spawn need only read the parent branch commit, rather than the global root git repo
- every action must tolerate duplicates
- a new branch has a blank io file except for the origin action that spawned it

Goals:
- duplicate detection should be the same process as normal executing - that is, it should be sniffed, rather than a separate duplicate detection model
- It is better to run a new function that try pool inside an existing one, since the isolate might time out.
- Try to align commits with queue actions

Branches can have snapshots of the git fs, so the write lock to access them is only for that specific branch, and not for anything more.
Killing all children branches should be easy too.
An action to interupt the current branch should be possible - while you have threadlock, you should always listen for incoming actions.

So there is no more subscribing to commits - commits trigger queue actions, which are listened to.  Might mean no queue interpretation, since this is all in the action info ?

Commit should signal surrender of the lock.

Artifact is always running in the context of some memfs snapshot, and some current branch.  

Snapshots should be keyed by their branch, so we can instantly load up all the snapshots that came before it, since each one represents a new layer that goes atop.  We start lazy, and don't actually read anything, but upon first read, we load up all the kv layers to see if the file requested is present.  Writing doesn't need to do any lookup, only reading needs lookup.  We could be more gradual, but ideally, when the full git fs goes kv native, this won't matter.  Tests need to include maximum branch depth.
## Merge pool
All pooling should have keys of the form `[branchName,poolName]` and value `payload`. So merging would first write to the kv store, then fire off an action to merge.  When the merge was received, the receiver would try to get the branch lock, and then would read in everything that needed merging in, processing on at a time.  Once it had enough and was in danger of running out of cpu time, it would perform the complete merge, do the commit, erase the todolist, and release the write lock.  Any undone work would then attempt to get the lock, pull in as much pooled work as it can afford, and keep repeating, until the queue was drained.

Then delete the branch that the merge come in from, which deletes its memfs snapshot from the kv store.

At the start, check if the key you're trying to merge has been included in the current branch or not, since this could be duplicate message.
## Action in band
This sends of an action into the queue, which will execute the current action, make a commit, and then return.  It is tempting to want to run the action if we are the one that commited the action into the queue.  What if we need to wait for responses of other items ?
If we are the first isolate, then we might do only the commit, and then dispatch the queue worker actions ?

## Pooling of multiple dispatches from clients
If a client dispatches many requests, they should have some kind of pooling.
Dispatch into the kv store, and then dispatch a process action to trigger induction ?
Or just wait for the branch lock and insert it yourself.  Wait until the branch lock is free and check if your action got inducted or not.  This model acts more like how we expect everything to be in a chain, including actions from the user.  But there was always pooling of some kind, and so the kv store can give us that pooling, with as few rules as possible, if only pooling raw actions was the same in some way as doing branching or dispatching actions across branches ?

A pool like effect can be achieved by the lock holder reading in any pooled actions and writing them out then removing them.  A pool candidate would listen to their pool thread key, and also wait for the lock.  If the lock became available but the key was gone, then they can exit safely.  

## Spawn
A single action on the queue, this fires up an isolate.  It is given the commit id that it is based off of, and the action index.  It reads the repo, and creates a new branch based on the name it was given.  It acquires write lock to this branch, and if contention is found, this is an error.  If the branch exists, this is an error.  It begins executing the action from its parent.  Once a commit is ready, it makes this commit, and then writes it to the branch

Spawn will write a response to the parent action, with the branch name, so it can be walked or interacted with.  Spawn carries with it the name of the parent branch.

Merging back to parent, it will send a message `MERGE` with its branchid.  This will be processed by the parent thread.  It will pull in the git snapshot from the branchId file, load this up,
## Spawn amp
If spawning is an action on the queue, then if we wanted to spawn many actions, this could delay the isolate for a while.  Instead we could break up the spawn actions into pieces, where each one handles a segment of the spawns that are needed.  These in turn can break up into pieces, until such point as there is a manageable amount for a single call to do, so in this way the spawn

The equation is that the spawn amplifier must be quicker than doing the tasks ourselves.
Each spawn results in a single new actions

If any spawn was a spawn amp action, and so it always started with one `SPAWN_ALL` action, then when this was processed, it would look at what it had to do, and might break this action up into many little `SPAWN_ALL` actions, then would ultimately get to processing some actions itself.  `SPAWN_ALL` can be used to specify just a single action to begin processing too ?  Or best to use a dedicated action for spawn single, since this needs to run a single branch.

 ## Pooling of multiple merge requests
If a thousand spawns are triggered.

Locks quickly available by listening to keys instead of polling

Reaper kv queue to do cleanup actions if something took too long.

## Test with a spawn rate benchmark
Test using single thread spawning as many as it can.
Test using threads that spawn x new threads which spawn x more, until some limit, then shrink back down to zero.