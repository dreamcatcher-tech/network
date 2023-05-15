
>[!tip] Created: [2023-05-15 Mon 18:34]

>[!question] Targets: 

>[!danger] Depends: 

Fundamentally we are using Ethereum as the payment processor, security / identity layer, and Escrow agent, whilst enforcing participation in packets to guard against securities.  

Are you decentralized if you run on an autonomous contract on Ethereum ?

## Functions DreamEther Contract
### addModerator( address )
Adds the moderator at the bottom of the stack.
### revokeModerator( address )
Only a higher moderator can revoke a lower moderator
### swapModerator( toAddress )
Moderator replacing their address with another one of the same power.  Maintains the same position in the moderator queue.  Used by moderators to cycle their addresses.

### `addQA( address )`

### revokeQA( address )

### `propose( pulseId )`
Propose with a specific pulseId.  Must include the QA fees, which forms a marketplace.

### `proposeUpdate( proposalId, dataHash )`
Propose any changes to an existing packet, such as artwork changes.  Must include fees in ETH.  

### `proposeMerge( fromProposalId, toProposalId )`
If the merge is passed by QA, then 

### revokePropose( proposalId )
Can be done by the proposer or by the contract moderator.  Will cause all fees to be refunded.

## Functions on Packet Contract

