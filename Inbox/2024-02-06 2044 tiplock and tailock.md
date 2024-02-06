
>[!tip] Created: [2024-02-06 Tue 20:44]

>[!question] Targets: 

>[!danger] Depends: 

If a commit action just triggers more queued actions that do more specific things, is this a better way to process it ?

Wait for tiplock, which includes being eligible, since you need to wait until the tiplock equals the commit before you, and then changes to being done.  This allows the HEAD to be far out in front of the tip and tail.

The tip and tail locks appear to be the same reusable mechanism.

Parallel processing in linear actions is possible so long as there is no filesystem collision.
If we make fs permissioning, then we can run actions independently so long as nothing internal changes.
BUT if we did side effects, we don't know how those acted either, so it is best to genuinely move sequential processing forwards sequentially.

If each linear action was a dedicated worker, that waited its turn, then the isolate gets max thread time.

Commit then might as well do the job of sending ALL the actions, linear and spawn.

For each given tail completion, I need to get the next tail in the queue to be able to move the tail on to it.

The cost of checking out of git should be considered free, since for a specific filepath, we should be able to tune it right down to almost a single kv read.

? how to know what is the next tail item ?
At the start of each one, we would look up what the last one was, and we would watch for its value coming up in the taillock, and when it was marked as done, we would take over the taillock.

Or each one calls the next one, and the last one in the commit passes it on ?

Actions can be put in kv and sorted by their sequence numbers and commits.
Each one watches the key infront of it for when its deleted, then it executes.
Can use commit timestamps, since these are guaranteed to be monotonic.

So after a commit is done, we write the tail for every sequential action followed by enqueing an action to run it.
It tries to find the key less than it, and if there is one, it listens to it.  As soon as that one goes null, it knows it can begin its action.

Tip needs no such coordination with other processes, so it can begin immediately.