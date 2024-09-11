
>[!tip] Created: [2024-09-11 Wed 13:13]

>[!question] Targets: 

>[!danger] Depends: 

If we use service to hold the websocket, then our servers simply hold a db record of subscribed listeners, and what they are listening too.

Then when a repo changes, the list of subscribers is fetched, filtered by branch, and then a notification is sent off to the pubsub service holding open the connection, to notify all the subscribers.

A similar method could be done for broadcast messages, if the client logs their interest.

Allow registering interest using a top level branch to receive notification on all child branches too.

Probalby would make our own websocket platform built on deploy.
May separate this as a module.
Allow for resumption / recovery of the message stream, on the client side, to cover when the isolate goes down.

Use queue to send messages to update all listeners.

Clients on recovery state what the last thing they heard was.

If they only care about latest, then they just give the hash, and get whatever the latest was.

Or on resume, latest is sent down anyway.
Use the cache to set these values so that reconnects do not cost a db write.