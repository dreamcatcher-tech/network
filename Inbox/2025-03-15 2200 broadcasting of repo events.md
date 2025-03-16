
>[!tip] Created: [2025-03-15 Sat 22:00]

>[!question] Targets: 

>[!danger] Depends: 

This is made significantly easier if each repo has a home region.

Subscribers would connect to the event nats of that particular region to receive message updates.

So we would use nats to broadcast when events were occuring, and we would leave it up to the watching node to figure out any gaps in the messages.

Simply run a global nats cluster, and broadcast away.

For the work queues, we would need jetstream.  We could set this up as a local cluster service, and use persistence in tigris? or just in the machines ephemeral storage.  Then the queues would be very fast, very cheap, have huge burst capacity, be in the closest region to the work.

nats will require us to manually stop our machines when idle.