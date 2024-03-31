
>[!tip] Created: [2024-03-31 Sun 22:47]

>[!question] Targets: 

>[!danger] Depends: 

General theme seems to be:
 - check we are not a duplicate
	 - use this check as the first atomic check piece
 - start doing all the activity we set out to do
 - atomically commit
 - if fail, start again, since we might be a duplicate

Duplicates can be either late or parallel
Parallel is when another process was running at the same time, or another process outpaced us to finish.
Late is when another process has finished and we started.


If you are responsible for adding many items to the pool, then there may only be a requirement to add a single action to process them into the queue, if you supply a list of ids for all the poolables that we want to check for ?
If the message to process this batch was atomically added, then reading them in should give the same result, so testing one from the batch is the same as testing all.
Or we can just add them all as a jumble in to the db, saving writes, but introducing a limit on size.

There must be some language by which we can test atomic models and be assured that this system will be robust beyond reproach, provided deno meets its agreed contract.
Then we can work on how we might detect if it failed contract, and also run parallel redundant systems.

All that matters is that the queue was atomically cleared - that's all.
So any pooler that loads need not be told what poolable to pursue, but rather to drain the pool. 
It can just keep going until it has done so.
Having a target commit stops zombie processes from trying forever if the queue is busy.

> Or deeper, make its purpose to make the next commit.  This means that it is passed the current commit, which was guaranteed atomically to be the head, and it only sticks around as long as the next commit has not occured.  The next commit will always drain the pool of the current items, so it can stop at that point, to avoid long running zombies.