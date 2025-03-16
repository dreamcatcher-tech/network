
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

## Vendors
https://docs.anycable.io/pro/install

https://nats.io/

https://pulsar.apache.org/

## fan out fan in
we probably have the same architecture for doing live streaming as we do for fan-in/fan-out of messages between running nodes. They all need some sort of a way to discover each other like a discovery service which could well be just written in an S3 bucket and then when they go to find each other they just connect to a local port, authenticate or prove that they have a right to be responded to and then they start receiving it.

The piece that's the same with the live streaming design is the multiple regions can connect together to have a single relay which allows the requester to be in a totally different region to the workers and still receive streaming updates from them all, going through a central interface. 

The point of making it the same, is that if a million witnesses want to see, then we should still only require each worker to stream a single version of what they're doing, and the broadcast system takes care of the rest using webrtc relays or something.

Its almost like holding a mapping of jobs to machines, so that any witnesses can lookup or be notified who is running their job, and can watch the execution of it.