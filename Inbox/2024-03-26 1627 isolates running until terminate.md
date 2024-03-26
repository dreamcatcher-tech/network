
>[!tip] Created: [2024-03-26 Tue 16:27]

>[!question] Targets: 

>[!danger] Depends: 

Each isolate already has the repo in its current state, so moving on to running the next action is the lowest possible cost for the isolate that just finished.

So long as we can make the system tolerate this process being terminated forcibly, which should be the same as all queue processes to ensure we are idempotent but also recoverable.

So a general format for an action should be recognizing they are the unique runner for a particular operation, determining if this unique action has already been and gone.

IDs should revolve around branch names and sequence numbers.
Head should always store the commit object, since costs the same to read it in.

Basically, we should use git properties as the queue management, locking, and recovery mechanisms.
# Wrapping layer around all operations
## Lateness detection
If the branch is deleted, we are definitely too late, so we would miss the commit completely.

Using git, we should be able to read the tip commit, get the iofile out, and find out if the operation sequence number is still outstanding.

Might be useful to store io info in the commit object, so it is a single read to find out a lot of these things.
## Recovery
If the queue message is redelivered, we should
Tickle the lock to give the other process a chance to respond ?
If a process was forcibly terminated, then this could add a lot of delay to the operation.  With a short 2sec timeout, we could recover quickly, and require every op to be finished in under this time.

These idempotence checks should be done at the point we go to update the branch tip, since that is what it always comes down to.  The tip should be updated atomically, confirming that the io status is always the same as when we started.

Writing hashed objects to the fs and then terminating is perfectly fine.  We can record our intent by writing these in a list that gets cleared after we have written the commit that includes them.

More involved locking can be arranged for side effects, since these make external changes.

Write a key that lists dirty oids in batches, linked against an action id.
If another isolate executes the isolate id, it will check for these items and clean them up.
However if writing the objects and the commit could be one big atomic txn, 
