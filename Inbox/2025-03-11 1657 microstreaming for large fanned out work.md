
>[!tip] Created: [2025-03-11 Tue 16:57]

>[!question] Targets: 

>[!danger] Depends: 

One way of implementing this is that the work is written as the status of a Tigris object, and when the worker picks that up, it writes down a way for a subscriber to be able to connect to it. The authorization to connect is managed separately, which is tied to the initiation of the action. So, if any given browser wants to view the ongoing status of a stream, they can read from the list of jobs to figure out what jobs are new and then they can connect to the worker presenting their authentication, which will give them back the ongoing stream.

But then the new problem of how to actually watch for new jobs in the queue becomes more of an issue. We could have a particular server that acts as the Job Coordinator, which a browser might subscribe to with filters or other types of stream throttling mechanisms to be able to be told when new jobs have occurred based on some patterns or some other type of thing. These get real-time streamed back to the client. They pick the ones they are interested in and then can connect directly to the worker to receive the streaming intermediate results. If the worker has already terminated, they are then able to graduate their full results. 

a worker can only receive or should only have to broadcast a single connection, and so the streaming should be routed through an orchestrator (which is the same service that can notify the client of job status changes in real-time). It can allow tracing of processes, so it can hop the stream as rapid-fire jobs get done. It can have a continuous watch going on because it can tell the workers or the next worker the job envelope can be tagged to say 'eagestream' which sends it back to the orchestrator until the orchestrator alters that packet. Now, since all the packets come from the orchestrator, the envelopes come from the orchestrator anyway, it's in a good position to slow this down any time it's getting choked. 