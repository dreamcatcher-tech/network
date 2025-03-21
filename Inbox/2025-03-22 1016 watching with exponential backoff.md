
>[!tip] Created: [2025-03-22 Sat 10:16]

>[!question] Targets: 

>[!danger] Depends: 

we can use simple polling on Tigris to check the status of a key that we are watching for. 

This might actually be more responsive than having a JetStream or NATS service that needs to be maintained for one. When it goes to sleep, it would need to be fired up again. The speedup is that when the request is first asked for or when a change is discovered, the requests or the polls are very rapid and then they back off until they get down to the rate of something like every 5 seconds or so after say 10 minutes. 

with additional tricks like detecting when the browser tab has gone to sleep and also doing a quickfire poll when the browser tab becomes available, we could probably give the illusion of instantaneousness without any of the heavy overhead of managing an event network. The cost, all things considered, might be pretty small. 

It is certainly much simpler to develop for.

we could make for a sharing of the polling If we're running on the same docker instance in the same item as being watched for then the pollation should be shared between them all, so when anyone gives it a kick or starts it again It starts running for all of them It will reduce the number of polls, and by a small amount increase the liveliness of long-running polls.

If the shared poller detects that there are multiple branches in the same repository being watched for, we could combine them into one watcher on the meta branch of the repository to save on polling costs and then notify each one in turn whenever their respective branch has altered. 