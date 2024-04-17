
>[!tip] Created: [2024-04-17 Wed 09:46]

>[!question] Targets: 

>[!danger] Depends: 

If we make a special endpoint for receiving live running updates of a file, then we can ensure that no broadcasts are lost if the transience occurs during the restart of an isolate.

Needs to be the same isolate that takes the pierce call, so that it dribbles down the response ?

Otherwise we can fall out of sync.

Or, can do the same pattern where a request for snapshot goes out?

Two channels, one for requests and one for catchups ?
So listen in to the broadcast changes, then also send out a request for the base splice, or a specific splice.

When a pierce comes in, set up a broadcast channel for all the changes related to it.
Client can stream all these impacts down.

What if a foreign observer wants to look at a stream in another chain ?
We must allow broadcast of patches, but also a way to do a catchup on a specific splice.
Stream out the splices each change, then let listeners make a specific catchup request on the same channel.  Listeners discard catchup requests from other listeners.  

Might make a second dedicated channel for catchups, else a busy file would get a lot of noise.

What about if an isolate executes twice ?  So each splice needs an exe ulid, so that concurrents can be distinguished from.  Clients should take the earliest ulid.