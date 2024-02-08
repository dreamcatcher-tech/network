
>[!tip] Created: [2024-02-08 Thu 15:31]

>[!question] Targets: 

>[!danger] Depends: 

fs operations seem entirely separate, and can be in the db or an fs module.
worker ops with isolates seem unrelated to io, but may have a dependency on the fs module.

In the front end, we would want to get the api by RPC, and then create functions that send the actions back up.

Github operations seem to be separate again.

So we need to move everything to be action based, and then how those actions get in the queue.

There is an element that is action construction, which can be done by rpc.

