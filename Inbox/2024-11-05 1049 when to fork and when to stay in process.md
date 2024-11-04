
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