
>[!tip] Created: [2024-04-02 Tue 10:09]

>[!question] Targets: 

>[!danger] Depends: 

Without fs changes, we can induct as part of the pooling effort.
Can we add to the pool atomically ?  Can we add to the pool and know we are not a duplicate ?

? is there a way to pool the fs changes too somehow ?

For every queue message received, we have to determine:
- is this a duplicate message that we are executing on?
- we must keep retrying until our task is done, since we have to compete to update the head commit

From pierce, the other 3 queue message types are triggered by a transmit.

Our actions need to be idempotent.
We should be able to make the queue randomly generate multiple messages and delay the messages and deliver out of order, and it should still be able to pass all its tests.
The devils queue can do anything except not deliver a message.  Use mocks to force caches being dumped, or provided direct cache drop control.