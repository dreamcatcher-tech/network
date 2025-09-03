
>[!tip] Created: [2025-09-03 Wed 17:08]

>[!question] Targets: 

>[!danger] Depends: 

if using nfs this might be handled internally.

fastest way outside of nfs is to have the clients register a webhook with the server, and then when the head changes, the clients get called via web call.

they then come in using the git:// protocol unauthenticated which seems to have the lowest possible latency, and they do whatever they need to there.

but if it was nfs, this might be not required.

nfs can keep moving the tip forwards underneath, then have another layer representing allt he changes on top.