
>[!tip] Created: [2023-08-10 Thu 14:05]

>[!question] Targets: 

>[!danger] Depends: 

If a soulbound token is granted based on some kyc approvals, and then all NFTs that are tradeable follow a given soulbound token, then we can enact a permissioned exchange.

Soulbound can be frozen or revoked by the administrator at any time.
Depending on the setup, admin can move balances around at whim.

When the soulbound token transfers, all the assets go with it.
Upon moving, there is a delay before the transfer is completed.
All transfers have a 1 day delay before being enacted, to allow for compliance checking.

Let people create tokens that do not exist yet, in order to bid on things that do not yet exist, in a way that would be executed once the thing was done and passed a QA.
### Benefits:
Means can advertise on NFT platforms, and use all the existing UI and tooling.
Makes data security be the highest possible, as well as auditability and provenance.
Makes pricing history be transparent and provable.
Avoids being a money transmitter directly.
Cost of data integrity and security goes way down, since the blockchain is the backups and resiliency of the system - basically impervious to infrastructure failures.

We can make ERC20 contracts that use the soulbound id as the owner of the token, not the address.  So to have authority, we look at what soulbound id the address holds, run all the kyc logic, then do the transfer. 

We can put a contract in front of the soulbound account, so you can send any action at all thru us, but the contract address only responds to whoever holds the soulbound token.  One contract per token.  Makes it look like a regular address to all the rest of the ecosystem, but only the soulbound token holder can control it.  

Can set your own avatar and other image information.  Bridge out to all chains.

Make a snap for metamask so you can use the contract like a regular contract.