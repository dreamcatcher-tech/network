
>[!tip] Created: [2023-05-15 Mon 19:51]

>[!question] Targets: 

>[!danger] Depends: 

Make a chain that acts as a service to broadcast the blocks of other blockchains available for consumption.  Provide derived services like safety broadcasters that declare when the target blockchains network and operations are normal, and when tx's can be considered final based on something like the value of the transaction.

To mint the next block in the DRE chain, you need to provide the next ETH block - this is the signature scheme.  The block is provided as a binary, and the pulse signed by the node then broadcast.  Every other node that gets it also signs it.

Can make a model where the children are contract and wallet addresses, and they get updated each block.  Means that DRE services can easily interact with the ETH chain rapidly without having to rely on contacting full ETH nodes, running our own one, or connecting to web2 infrastructure.

The signature scheme is based on validating the ethereum block.

The state tree is the Ethereum blocks.

Derivatives can be built on this chain, so they parse the blocks into something that can be used by DRE ?

Ultimately DRE should be able to wrap an ethereum node completely and do all its network activity for it.