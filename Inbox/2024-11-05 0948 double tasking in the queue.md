
>[!tip] Created: [2024-11-05 Tue 09:48]

>[!question] Targets: 

>[!danger] Depends: 

Each time we commit, we are inviting other processes to take over.

Plus we are creating a check point in case we fail.

For speed tho, we could just do the calculation requested, send off the action that would do this if we died, and rely on the safety mechanisms to catch it ?

This works if the queue time is slower than the current isolate, whilst still guaranteeing correctness.

Doesn't work for side effect calls, since guarantees the side effect happens twice.