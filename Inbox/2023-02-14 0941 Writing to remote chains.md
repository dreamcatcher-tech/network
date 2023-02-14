
>[!tip] Created: [2023-02-14 Tue 09:41]

>[!question] Targets: 

>[!danger] Depends: 

Reading remote chains is achieved by subscribing using the announcer protocol.
Writing requires more.

## V1
Require the target chain to be already opened to the incoming chain.  This can be preprogrammed in, or can use ip address whitelisting to allow a handshake to open up a new chain.

### Send side
Writing to a given path needs to know that it is a hardlink, that is held somewhere else.  For now simply checking that it is rooted in mtab means we know how to access the remote operators.
Be careful to send comms only to the validators of the chain, and not to any relayers.  So look at the pulse, get the validators, then get the peers that are validators, then select those to send to.
Write peers must be validators.

OpenPath needs to be mtab aware.

Initial open is from out of band, or done thru a chain that accepts public actions.  From there, all announces of interpulses back to the server need to be into chains that have a connection for the sender waiting.

## Latests detection
Because no map of chainIds is stored on each node, the sender needs to provide the cues needed by the receiver to retrieve the latest pulse for the given chainId.  All pulses on an engine are aliased to the root of that engine, and so a path must be provided with each interpulse so the engine can recover it.

The sender would always know this path relative to the place they were receiving the served chain from.  For this reason all serves are stored in mtab too, so that on load, the path can be refreshed to reaffirm what latest means.

If the announce fails to give the latest, the receiver stays silent, to avoid leaking information.

## Security 
Allow access by peerId only, all others get refused connection.
Or, no whitelist presents a default page where people can ask to be let in by those already inside.

## Crash recovery
Tension should be detected send side and retransmitted after a connection is found.

## Socket chains
Going thru a single chain can make operations simpler overall.
If the sender always communicated thru a single chain, everything is delayed by two pulses, but it makes announcement simpler.
Otherwise, the sender could be communicating with arbitrary many nested chains, and so the announcer would need to fulfill all of these ?

We could permit all transmissions, and the receiver could blacklist if we tried to transmit to something we did not have an open connection for.  This is compatible with ACL based access, as the engine can check for ACL permissions.
