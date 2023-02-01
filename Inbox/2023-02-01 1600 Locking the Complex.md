
>[!tip] Created: [2023-02-01 Wed 16:00]

>[!question] Targets: 

>[!danger] Depends: 

Some updates may need to lock all of approot before being applied.
This can work by grapping the lock, transmitting all the actions, then waiting for the completion of the actions, being referenced by channelId and requestId.

In order for future pulses to be made, they would need to ack this approot, which would guarantee the lock.

Can lock by path, such as locking only the customers collection, or locking only those things that match a query pattern.