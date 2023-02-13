
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



## Security 
Allow access by peerId only, all others get refused connection.
Or, no whitelist presents a default page where people can ask to be let in by those already inside.

## Crash recovery
Tension should be detected send side and retransmitted after a connection is found.