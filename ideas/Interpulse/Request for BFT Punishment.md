
>[!tip] Created: [2023-04-27 Thu 10:23]

>[!question] Targets: [[Request for Multi Host Consensus]]

>[!danger] Depends: 

Byzantine behaviours can occur in data transmission, validation.
Other protocol exceptions can also be reported and punished too.

Some nodes in high value positions might only accept connections from nodes that have paid a deposit to a central chain which is a stake to prove good behaviour.  It can also require connections to it be staked as a form of DDoS protection.

Because all interactions and ultimately signed (including the libp2p interactions) we can provide proof of a chain misbehaving or being misconfigured and claim back some of the slash.

The detection of BFT should be built in to the protocol so that it is natural to do.  For example gossiping with other nodes about the versions of the tree produced and signed by other validators.

Critically, as part of normal operations, a node must act in a byzantine way on purpose with some preset probability.  If other nodes do not detect and report this bad behaviour, they are punished as they are not fortifying the network, and have failed to keep watch.  This stops any node just saying yes to anything and forces the health of the system to be provably high.