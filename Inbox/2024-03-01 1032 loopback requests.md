
>[!tip] Created: [2024-03-01 Fri 10:32]

>[!question] Targets: 

>[!danger] Depends: 

Requesting something to self could be permitted, but needs to make the lock on the current executing item be dynamic, rather than monotonic, since it needs to pass the lock back.

We could make the end of the execution find the next action, and send a message to start that, rather than having a large number of isolates at the ready and waiting, plus bogging down the queue since they haven't executed successfully.

So if upon completion, the request sends in its reply to the pool, and then sends a message for the next in the queue to execute, this is cleaner, and possibly not that much slower.

