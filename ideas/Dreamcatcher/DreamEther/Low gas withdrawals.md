If we had a way to make the enact and claim functions be not a function of the nft ids at all.
Then use the exit and burn tools to manipulate the withdrawals.
V2
`mapping( address => EnumerableSet ) claims` which maps each content holder to the set of packetIds for which they hold claim on.
Inside the change, a separate mapping tracks all transfers, so the original allocation from QA is stored and used as claims reference, then all transfers are used to track all trading that happened after settlement.

So when enacted, each solver has their claims mapping updated with the current changeId.  The cost of this function is exactly the number of content holders allocated by QA.  This can be done when QA sets the shares.

If upon enact, we point each content holder to the funds map, then take a cheap copy of this, so each claimer ticks off the funds they claimed, and they can avoid some ?  You can only claim all of your share of each funding nft or none, as you get marked as zero.

Claiming or squeezing is converting from this list of unclaimed amounts into asset ids.
This function is a function of
? how can we make it a single call for all content holders ?
? How can we keep the change storage as the only storage for the funds map, rather than moving into a pool of assets ?
? How can we enable burns of a specific asset in a specific 
? How can we make funding cost more gas then you get back on claim, so there is no loss to solvers for funders spamming the packet ?
? Could exit balances for a given token be done as a sum of all the stored values, rather than a write ?

BurnList
We can let users put up a whitelist of assetIds that they want to withdraw, so that when they act on claims, only these tokens get applied.  Whitelists are public, so anyone can make one, and anyone can select on to apply, so that for a particular packet, the same one can be used by all content holders.  A Global one can be maintained as well.

Squeeze
If sqeeze could take a specifc list of nftIds, then it could be surgically applied.
This would burn the rest of the NFTs tho, since the `claims` entry would be removed.
This would remove the need for calling burn in the first place ?
Or it could target specific packets ?
Or just go until it ran out of gas, and rely on the fact that it should be deleting info and so getting gas back ?

Or we could do the transfers directly out of the packet, with no merging into debts ?