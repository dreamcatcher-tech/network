
>[!tip] Created: [2024-02-12 Mon 09:45]

>[!question] Targets: 

>[!danger] Depends: 

Else it is one commit per action and the chain becomes the bottleneck.
The user functions should be the bottleneck of the system, not the chain.

We could run them in parallel, and just order the requests from the filesystem, so any filesystem request needs to have happened in order.

If it got to the end and was only reading,  then we can order the writes.  Replay ones where a write happened.  Or stall anything that needs a read to check nothing else did a write to that location.  Or we could let the functions describe the access paths to files they need, then we can do async runs for everything that doesn't have an overlap.

