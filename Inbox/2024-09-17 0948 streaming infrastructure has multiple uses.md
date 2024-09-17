
>[!tip] Created: [2024-09-17 Tue 09:48]

>[!question] Targets: 

>[!danger] Depends: 

Can be used to send packets of live data around, like mouse point movements, or selection events within the stateboard between shared participants.

live video calls perhaps.

Streaming the token consumption rates, so people see in realtime how much is burning.

Could use yjs and have webrtc do the broadcasting, so the isolate that is running simply sends out using a webrtc stream if there are any authenticated users ?

Or, make a separate deployment that handles hooks for this type of thing, so there is a standard target for the executing isolate to hit which goes back to the receiver.

Like a pubsub websocket thing where the changes come from an isolate that doesn't have a persistent connection, and goes out via a system that is persistent.
Use the broadcast channel to get messaging between regions.
Use CRDT data types so that if something is missed it can be caught up again quickly.

Basically we could make the updates be completely separate from the core blockchain, and the core blockchain could push out updates using this separate service.