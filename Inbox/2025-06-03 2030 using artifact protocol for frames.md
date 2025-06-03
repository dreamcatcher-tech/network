
>[!tip] Created: [2025-06-03 Tue 20:30]

>[!question] Targets: 

>[!danger] Depends: 

using the artifact protocol for running artifact protocol messages over seems a bit weird, but nevertheless, it is a protocol designed for bridging contexts using json messages and giving the illusion of functions.

If the basic model was transferring a message port over, and then sending results down that port, we could probably make a simpel piece out of it ?

ORRRRRRRRR

simply implement the invoke and subscribe, and then tuck the other stuff under as actions ?


Make a dedicated receiver that knows to splice off some specially addressed actions ?

the callbacks are just invokes.

receiving props changes are subscriptions from the frame to the holder.

if we made our own library, then could split the code out and focus on that one module.
or just hold it in a folder, and give it a very definitive interface.

telescoping channels model:
connection is initiated by sending a start request with a transferred message port, and once established, messages flow on this channel, which may include other actions.
this primary channel is used to manage lifecycle events, in a highly focused way, rather than a message that can be listened to by anyone.

when handshaking, make a counter that goes up, and always choose the highest channel.

lifecycle of the channel should be very simple, since it heartbeats, and if it dies it sends a close message, and then opens a new one.
On the other side, if it receives a close it just drops.
If it receives a higher ulid after say 100ms, then it closes the current channel and accepts the new one.

rewrite web-transmit so that it uses the postmessage channel ?
retry logic can stay the same ?

server sits there and just waits for connections to come in via post message.  It only listens to 'start'.
each start message comes with a port, and so from then on, it just deals in lifecycle events.
- ping
- abort
- invoke (sends up a port)
- subscribe (sends up a port)

it will send down:
- connected (client may start sending messages now)
- abort
- update (sends down the configuration props)

if it receives a new start message from the context it is managing, then it will send an abort signal down and switch over to the new channel.  This will reject all in progress messaging.

on an invoke channel, there are only server side messages, which is just the response, which is always an outcome object, but could be a reject or resolve message.
 - abort - if the child does not care about the response
 
on a sugscribe channel, the server inner port message types are:
- next (sends down the next message)
- error
- end
the client inner port message types are:
- abort


pass abort controllers into the channel setups.

getting updates could be just a subscription to the server for the type of the props.

allow the child to send a number of messages before the handshake is complete.
only when the server sends down 'connected' will it start sending.

add event listeners that have an abort signal attached, ready for teardown.

we could make it so it never tears down, because it probably shouldn't ? but then if it hot reloads or something, it might need to ?