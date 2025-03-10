
>[!tip] Created: [2025-03-10 Mon 15:24]

>[!question] Targets: 

>[!danger] Depends: 

Look at the queue depth and look at the stats on what the task being asked for. Know approximately how many containers to instantly spin up. 

If the load is getting quite high in a particular region, shift to another region. 

The cue could be made up of just purely objects that get dumped in a bucket. When they are done, something gets written to the bucket again. There would be some kind of orchestrator that would always be trying to take from the cue. We should be able to have a sharding of the orchestration if the load gets quite high. 

However, we should be able to rely on the object notifications to trigger calls to the orchestrator, which we can set some concurrency limits upon to enable scaling of the orchestration service. 

We could have a periodic sweeper that looks for objects that have not been pulled from the queue in an appropriate time. These objects would have been moved into the processing state, or at the very least, there should be some partial output that got rid of it after some set timeout, so that a long-running application is also able to continue without any problems. 

Ideally, the container that produced the request for the queue processing would be able to do the processing itself. 

All the messages could be keyed by a particular job so that we could get good observability by watching the objects that occur within the S3 storage.

We could run our own notification service within Fly2io. When we want a job, it gets sent as a web request into the Fly2io app, ensuring that we have excellent burstability. The job goes into the queue, it is written to type "Tigris". It then begins executing on the container that received it. The purpose is that the container that received it will scale if many requests have come in concurrently. Writing to Tigris ensures that the message is durable. 

A huge advantage here is that the message processing will occur in the region closest to the requester of the message, giving us excellent burst ability and durability, but also very high latency. 

The queue could be periodically compacted into a Git commit, so that the messages can be removed from being individual objects and packed down into long-term compressed storage. It should be provided in such a way that the queue execution can be replayed at some later date if needed. 

This gives us the tantalizing possibility of being able to make one queue per application or repo, so that in effect, the fiber data itself is the execution queue and the orchestration of it is handled by the committing node. 

When that node realizes that it has been presented with more work than it is capable of processing, it makes calls out to the application to bring on extra burstable processing to occur.  This burst ability could be optimized in many ways, such as:

1. Choosing the size of the compute that it's turning on based on the size of the queue.
2. Making direct API calls to increase the number of containers rather than relying on FI.IO's built-in scalability.

The added advantage of all this is that the idle state goes down to zero cost, and yet the ramp-up would be in the order of around 300 milliseconds and would be in the region closest to the consuming web page. 

Each job would be required to write a heartbeat object into Tigris to indicate that they are still working on the job in a lively manner. This same system could be used to send back periodic updates to the caller.

Streaming back responses. Since the caller is most likely a Fly.io container running on the edge, it could provide its web address so that any of the workers in the queue can, upon request, send back streaming updates on how the job is going. This container would know how to reach the runners of the different jobs because each runner would have listed their contact details in the processing object that they wrote to Tigress. 