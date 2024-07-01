
>[!tip] Created: [2024-07-01 Mon 15:13]

>[!question] Targets: 

>[!danger] Depends: 

periodically, every 5 seconds say, send down the full text of the session element being changed.

The splice gets sent down with the last known commit, and the broadcast channels are then used to send down patches based on this diff.  Splice points to a prior that it depends on, and periodically a reference to the original is sent.

If the recipient doesn't have the base hash, they should download the base hash and then start listening for changes after that (or, buffer the changes, and replay the patches when they get the base sorted)

Each splice sends a sequence number, and each sequence number that is a multiple of 10 (say) is a full patch.

On the browser side, we need not do any sequence tracking ?

Server side, we handle the unreliability of the broadcastchannel by ignoring any items that come thru out of order, and waiting for the next full commit.

So to the client, we would send a continual stream of patches that are always differential since they first asked, since we have reliable comms thru the websocket.  But server side, we handle the broadcast channel missing things periodically.

Once the full commit is made, we fully replace whatever the patched versions are.

Broadcast channel starts sending all the time anyway ?  or only for things that are being watched ?  So have to register a streaming watcher in the db in order to receive these ?