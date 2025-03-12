
>[!tip] Created: [2025-03-12 Wed 15:19]

>[!question] Targets: 

>[!danger] Depends: 

The general thing we need is the ability to send messages to a worker, and subscribe to their executions, whatever they are doing.

Also jobs that need executing.

All in a way that we can blockchain, and have multitenant, like one queue per tenant.

So the queue needs to be inside of artifact so it can be ordered and hashed.

We need then, a discovery system where workers can be found by other workers very quickly.
This might be an in ram lookup that all nodes put in effort to maintain.

All the queue mechanics need to be provided in a decentralized sense.

Probably induction into the queue is the easy part, and we do this very fast, and then we allow market mechanics to handle processing order.