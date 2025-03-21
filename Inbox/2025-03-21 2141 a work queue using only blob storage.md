
>[!tip] Created: [2025-03-21 Fri 21:41]

>[!question] Targets: 

>[!danger] Depends: 

The question is, would it be cheaper to run it on fly.io rather than setting up our own Tigris cluster? 

It seems like it would be more reliable, more distributed, and could easily go global, but there would be a cost to all the rights to Tigris, whereas the Jet Stream system only incurs fees for the servers being on and can auto-shut down. 

Now Tigris will consume nothing while stopped as well. 

Something needs to tickle the system or amplify the system. It might be that we run an entirely separate app to do the workload jobs. The idea would be that the fibers branch holds all the jobs and their statuses. We don't want to do a bunch of commits just to say, "Hey, I started the job." We only want to know when it's finished.

We'd use time regress objects to act as markers to say which worker is working on what. We'd have some timeouts and some reapers. They would periodically sweep across all and find any stalled workers that hadn't done any updates. The idea being that stalls should be rare, and so most of the time will be okay. We might make a few to be able to write into the fiber log that there was actually a fault discovered in the rate of faulting. 

All going well. The jobs were completed fairly minimally with you know as quick as the jobs could be done without any faults that would be the normal operation. 

events by polling seems pretty bad, so we could set up a rather loose queue that was really just for events or a per-region queue. 

Shockwave would be about taking a commit and amplifying out all the changes that have occured, which may include some sharded calls to get help with the amplification.  Each fan out point acts as an orchestrator / concentrator - when the jobs are done, it is responsible for getting each one in to the commit as quickly as possible.

The fan out could be handled by nodes that ran a jetstream queue, so that workers can message about their status.  This also allows notifications on changes.

The objects could be used to trace and find workers too, removing the need for jetstream.  Then you could dial in to the worker and get streaming progress.

Each region would have a jetstream queue, and every node can connect to this to get notifications about repos.  When repos go active, this get published, and when they settle, this is published also.
Watchers could connect to the orchestrators to get notifications in realtime ?