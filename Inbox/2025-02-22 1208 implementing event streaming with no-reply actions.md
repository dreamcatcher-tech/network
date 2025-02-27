
>[!tip] Created: [2025-02-22 Sat 12:08]

>[!question] Targets: 

>[!danger] Depends: 

If we make an action type that is fire and forget, as in it has no response, then we can do even streaming by sending in a stream request action, which needs some flag set to indicate the other side is expecting events, and then we can send back a stream of these actions without clogging up the channels.

Sending back the reply to this action is the final closing result, which might be an error.

We need a way to signal stop on the stream, too.

So if the napp format just sends in an action, but it is flagged as being streaming, then the other side may start streaming things back.
The other side will send back a streamid reply, which is intercepted by the system, and upgrades from a regular promise to a stream.
Then the other side will send stream events tagged with this, which will receive no reply.
Upon stream end, the initial action is replied to.  Stream error rejects it.
The consumer can exit the stream by sending a system level action back to the source with the streamid, saying cancel.
Backpressure is managed by the hosts doing out of band signalling.

If you do not consume the async iterable stream, it will resolve to its finished value, and that's that.

The source can just not send stream events if it doesn't want to, and just finish with a reply.
The flag 'streamable' means it is capable, not required.  Either side can ignore the stream.


Flag by providing a stream schema - if not there, the stream is ignored, so sender should just run it to the end discarding all the items.

We could have various control signals that get implemented later, for doing stream control, like skip, take 10, etc.

How would we pipe things together ?

How does subscription get stored and resumed ?
On the send side, we would just discard the actions that had been produced already, and carry on where we last transmitted up to.
On the receive side, we would just replay the actions up until the wait.

Subscriptions to higher events need to be stored somewhere, so if you want to subscribe to repo events, these would need to be stored in the meta branch of the repo ?

This leads credence to having a single control branch per repo ?
But could have many, and if any commits on any branches occur, we read to see if any events need to be injected into the fiber managers.
Or there could be a dedicated events branch.  Reading all the branches that have event watchers seems best.
1 process branch per repo seems useful too.

two way streams ?
probably requires a function call back to pull the streaming data with some kind of shared id.
could experiment with it, but hasn't seemed to come up any time.