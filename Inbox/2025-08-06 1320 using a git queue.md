
>[!tip] Created: [2025-08-06 Wed 13:20]

>[!question] Targets: 

>[!danger] Depends: 

if we have some cloud primitives that are reliable, like a job queue, then we can do worker management using these systems.

A regional job queue would not be synced off site, for resilience, and would only run locally in the region, using a consensus algo that was not BFT but geared for speed and latency.

we should run the queue in a way that lets it pulse commits, so that we aren't thrashing the commit logs, allowing it to gather things in - if there is a lot of new info coming in to the mempool it would wait a little bit and see if more comes in, up to some max amount.

So for making APi requests out for inference, this seems best handled in a job queue, where the worker logs the job start, and the resource requests for the streaming output can be pointed at that specific worker.

