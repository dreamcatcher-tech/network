
>[!tip] Created: [2024-04-06 Sat 13:47]

>[!question] Targets: 

>[!danger] Depends: 

Each branch can only do one thing at a time, so we can get the effect lock as a secondary lock that ensures non atomic things are not happening in parallel, but that there is recovery in progress too.

Exe is the trigger, and so we are simply adding another layer since pure execution can take place in parallel, but with side effects, we need lifecycle hooks for the side effect.

The dev should supply the side effect as just an isolate, and anything it wants to do
? where would the cleanup go ?
To execute it, the queue first updates the effect key.
Cleanup should always be run first, so the isolate is responsible ?

? Should cleanup only be called if there was another key there already ?
External ops that are not idempotent should have a way to check if the action was already applied on the remote system.
Isolate should watch the lock key and bail immediately if it sees that key change ?
Last to run wins is better than trying to get last to run to wait for currently running.
Last is the current liveliness of the queue, which we should never block.
Last to run should be rare, and when it does happen, worse case the op took twice as long to run.
But, what if the op finished before starting ? this would show up in execlock.

Exe should be watching the lock key, and it should run the isolates inside of webworkers, so that if it sees the key change, it tears the compartment down instantly and bails, and throws an error for the queue to handle.

If we had no locking then we could just allow the last to execute to take over ?
So at startup, last to execute assumes it is the winner.  It writes a new ulid to the side effect lock for the PID, and if it wasn't zero, executes cleanup, but always atomically.  Writes to the object db don't matter, since content addressed.

In the case of clone, we could make all writes check that the lock we got was still ours, and immediately bail if it wasn't.

The API would have a flag `isSideEffect` so an isolate can know if it is being run as an isolate.  It would also have a flag `isSideEffectTorn` which means that this run is the latest run, but the previous run was interrupted.  This should be used to do conditional cleanup / compensation to ensure the working state is as expected.

Any FS or accumulation activity checks if this isolate is still active, and throws a torn down error if it has been superseded.
The isolate could supply an abort controller that signals when it is being torn down.


This is only made possible by the blob adds being atomic.  If we used B2, then our pointers to B2 would be the atomic part.  B2 could be shared by all, since only our system can read from it ?
Could B2 be used without tracking anything in kv ?
Yes, but would need to either store buckets separately, or keep a record of the number of read references, so we can clean up when the counter hits zero.

B2 should use a number as a versioning system, so we can walk the whole system and know that all ops and dedupes aren't affecting any newer data as it would be using a higher layer maybe ?
If we just never deleted objects, then this isn't a problem ?

A deeper compression algo, outside of git, would go thru pack files and objects alike, and find duplicates, removing any it found, and storing reverse pointers so we could always get back to which repos used a given object.  Repos never list their objects, they always walk downwards.