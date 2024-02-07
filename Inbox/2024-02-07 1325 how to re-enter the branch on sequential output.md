
>[!tip] Created: [2024-02-07 Wed 13:25]

>[!question] Targets: 

>[!danger] Depends: 

The fs that the action started running with needed to have held headlock, since no further actions can be included until this action returns.

So on this action returning, only then can the pool be processed.

Unless we do a cancellation action in the pool, which will interupt the current runner.

We need a general interruptible task where watching a key will immediately abort the task.

We could take actions in during execution, so long as the fs of the running task was being kept updated.

OR we could rely on `.io.json` being not allowed to be updated by anyone to let us do a fast forward merge when the action comes back.

So when the action returns, there could have been many commits with new IOs, but nothing would have altered the fs that we started the action with.

