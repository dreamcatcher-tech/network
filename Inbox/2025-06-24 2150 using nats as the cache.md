
>[!tip] Created: [2025-06-24 Tue 21:50]

>[!question] Targets: 

>[!danger] Depends: 

We could run a nats server in the idle space on our images, and use that as the cache which gets hit first when looking for something ?

nats pubsub could cache the last n seconds of messages, and then when a request goes out, all the subscribers say what was the last thing they say in the last 15 minutes, if anything.

We could know if we're fully connected if we maintain a topology of servers.

We could also just round robin direct ask each running server using fly.io, and ping them all to ask what the latest value they saw was.

Or have a local router node on each region that speaks for all machines in that region.

or use a strong jetstream quorum, so we always know ?

have affinity in the commits, so the same machine will do the running, but also the last commit sig tells which machine it was.  or at least what region.