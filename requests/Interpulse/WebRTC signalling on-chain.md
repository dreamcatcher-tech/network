>[!tip] Created: [2022-10-07 Fri 15:35]

>[!question] Targets: 

>[!danger] Depends: 

To allow browser peers and nodejs peers to all find each other and talk using webrtc, signalling is required.  This requires a separate set of infrastructure to be set up and maintained.

If we could do all the signalling via chains, then all we need is a public facing chain host that can do some interaction with chains (like injecting what address it saw the signal come from), host some small chains (like a chain used by two peers to handshake), and receive inbound connections.

This means the infrastructure remains generic, and all we ever have to do is host chains.

Further, we may be able to use some of the signalling info for one peer as the basis for another to get started, possibly shortcutting the handshake process.

Signalling chains can be publicized, so browser instances immediately have a published rtc address.

Peers may be gossiped between each other by maintaining lists of peers and striving towards a large central chain registry of useful connection information.