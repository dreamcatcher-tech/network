
>[!tip] Created: [2024-04-05 Fri 21:38]

>[!question] Targets: 

>[!danger] Depends: 

When many watchers connect to cloud, they are all in separate isolates, watching the commit head.
Then when a commit arrives, they all pull it down and digest the contents.

Could just make the commit format include the info the pierces want, like which ulids were resolved ?

Puts less db load.

Or, each commit that atomically succeeds broadcasts on a broadcast channel.
The piercers watch this channel, and receive info they need, like which ulids just got resolved.

Actually the only thing of interest is which ulids, since this is the inverse of not being able to pool atomically - we have to watch with uncertainty too.

Have a fallback method in doing a kv key check, or some other thing periodically.

?? what if the pierce runs a long time ?
The client should do reconnection anyway.  On reconnection, or on some timeout, it should re-read ?
On first connect, it reads in full, to see if what it wants has been processed, and steps backwards ?

Broadcast channels are flimsy.  Recovery can use timestamps to get recent commits.

The best time saver is to store helpful info along with the head write.
