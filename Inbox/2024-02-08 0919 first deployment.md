
>[!tip] Created: [2024-02-08 Thu 09:19]

>[!question] Targets: 

>[!danger] Depends: 

Watching keys is slow.
Broadcast channel is fast but doubtful reliability.
Queues are fast and close to the db.

## Remedies
All ops that use the db need to be done via a queue to get close to the DB.
Use atomics with retry to get the lock on the head.
Output updates should send a message back so the sender can close the channel.

Output should subscribe to the broadcast channel of the branch, and then 
## Possibilities
Make a broadcast channel that is all about a particular branch, then leave it open - use this to coordinate lock contention.

Artifact API should be merely a queue lobbing thing.