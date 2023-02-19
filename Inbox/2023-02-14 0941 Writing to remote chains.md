
>[!tip] Created: [2023-02-14 Tue 09:41]

>[!question] Targets: 

>[!danger] Depends: 

Reading remote chains is achieved by subscribing using the announcer protocol.
Writing requires more.

Seems cannot mount a fork on mtab, since auto forking is not what we want to happen ?  
Perhaps forks should be more clearly labelled ?
Forks on mtab defeat the auto watcher that tries to keep the mounts up to date.

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

## Keeping the same path opening as for local chains
So if the chain was mounted at mtab, then we would ask mtab initially to open something up for us.  This makes mtab the permissioned identity in the foreign chain.

## Finding the target peer
In mtab, the list of peers would be present, so we would simply be announcing to the peer listed already.  If no connection, then we need at least a chain peer to connect to.  The root would always be the way we'd look up the chain peer.

## Returning the result
The recipient of the announces needs to keep the assosciation for sending the replies back.  If the recipient crashes, it will lose the assosciation, and needs to wait for the sender to contact them again.  Later it might go out looking for them, to keep the network moving quicker.

If each announce was awaited for it to be included in a pulse, then we could just return back the next interpulse that came of it.  Or the peers we are actively talking to could be stored in mtab for future references.

## Storing chain peers
Outgoing has chain peers from mount or some other way of communicating.  Coming back in, we should take note of all interpulses that come in and are accepted by one of our chains.  The peers should probably stored in a parent, or with the chain somewhere.

Storing everything in mtab creates a bottleneck.  The highest level chain should store the peer address in it, unless it is configured not to.  Or the list can be pruned whenever chain
Or store by path, and check when the path changes ?
Store only the highest parent that has a connection, and store this in mtab.
Mtab stores who is allowed to accept connections, so track the changes in these shared paths, and whenever a connection is closed to a remote chain, remove the mtab entry.  If we are desparate for peers, we can walk the mtab history and dig up whatever we have there.

Sending back should use the same root:/path type of info, so that the recipient engine cluster can always locate the chains the interpulse is destined for.

Should peer info go in the chains, or should it be separate ?  Seems separate.

If tension indicates who we need to find peers for, then we can crash at any point, and restart the search ?