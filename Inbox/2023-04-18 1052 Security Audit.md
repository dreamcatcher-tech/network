
>[!tip] Created: [2023-04-18 Tue 10:52]

>[!question] Targets: 

>[!danger] Depends: 

Modular isolated components that get audited at their interfaces, so that the properties of the overall system are maintained, and so that each module is responsible for only one property.
If a block diagram is constructed with the interface functions and permission responsibility described, then we should be able to audit the architecture at the top level, which should make it simple to understand how the properties of the system are upheld.

Then, for each block, we can audit just that interface.  So we can start to use unaudited code if the code is wrapped and isolated sufficiently.  Eg: libp2p would be wrapped in an isolate, and would be provio

Place an auditing buffer at the network point, so that it looks for unencrypted traffic, and also can check ACL permissions of connected peers.

Everything is logged in blocks anyway ?

Model each dependency as being corrupted in some way, so how would that impact our system ?

## Encryption processor
The network module can refuse to send data that appears to be unencrypted.

## ACL
This rules checker is an independent module with a strict interface.
Only it can allow the network module to talk

## Network
Will handshake only with those peers that the ACL allows.
Will transmit bitswap blocks only with those peers then ACL allows.
Will gossip about peers ?