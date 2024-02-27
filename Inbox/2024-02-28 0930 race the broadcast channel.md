
>[!tip] Created: [2024-02-28 Wed 09:30]

>[!question] Targets: 

>[!danger] Depends: 

Problem is the latency from the edge isolate to the db.

To solve this, the queue could implement a broadcast channel, and it could attempt to race the db to get the message back to the caller.

Reliability is provided by the db, but speed may be provided by the broadcastchannel.