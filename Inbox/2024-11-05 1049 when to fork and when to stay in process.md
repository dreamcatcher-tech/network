
>[!tip] Created: [2024-11-05 Tue 10:49]

>[!question] Targets: 

>[!danger] Depends: 

If the branch instruction is used, then it makes it hard to run the process tree commits since all those executions need to run and return their results back.

This could be considered a wave, and we can batch them up until the last one occurs, which will then resume the commit process that merges in all the results.

Would we wait for everything in the wave to complete before executing again ?
All functions that are local, and do not have extra time delays on them, should be awaited for.

A slow function could hold up the fast functions.  But if each one was time capped to 50ms, max delay is 50ms and it guarantees continuation.  Without the wait, the first one might trigger a commit and slow down all the others further.

What about making the committing function execute many of the fast functions ?

Could be make a model of the queue that has the same interface but works in a browser using web workers ?
In this way, we could get more perf but we could also understand the system better ?

If the whole exe branch ticks forwards, then whenever there are jobs to be done, we can fire off a 

When a large number of processes do not need git write operations, we can run them without starting new threads, and just run shockwave directly.  But how would the results come back ? If it was done with a reducer function, then it need not leave a mark in git ?

We might need our own ramp systems inside the exe if the number of branches is very large, since there is a ramp delay.

If the complex asks for a large number of executions to occur, then the results should not require a new queue message to get the results stored, they should be written to the db, and a trigger done when the final one is written.

So every runner pulls in the commit object from cache, and knows instantly how many executions are occurring right now.  They all do their specific execution, update the counter for the commit hash, and then when the final one completes, it knows it is last, and does the cleanup.  BUT this could be tricky to clean up, and the combiner is now one execution time down.

Or, a chaser can be sent out, whose job it is to wait for the jobs to complete, and then do the commit ?  Seems faster to make the last task do the job.  If all tasks are guaranteed to execute, then we can rely on any single one to execute.

Watcher is more reliable tho, since updates to the batch might not know they are the last one, or might collide a lot if they are trying to update without seeing a difference in the object.  The process might crash in between doing the job sumission and in processing the last item.

Chaser goes out as the last task, which starts watching for the job completion.