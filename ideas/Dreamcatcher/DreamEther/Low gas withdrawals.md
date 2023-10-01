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

V3
`claims` stores reference to the packet funds, and a snapshot of what the funds are.
withdraw walks thru each packet on our list that is unclaimed, and for each one gathers a list of what is withdrawable.  It checks the gas cost and just squeezes as much as it can.

Add a deposit for adding a new asset type
If you fund a new asset, then you get charged extra gas since we open two new sstore slots to cover your creation of this asset class.
Or charge each funder a gas penalty when they fund a change, which is refunded upon squeeze.
Hurts griefers, doesn't harm genuine users much.
This gas may never be recovered tho - last to claim could get the gas refund ? 
Or burn a gas refund each time a claim is made ?
Each holder gets one gas refund per squeeze they do, to help out.
QA fees are used to cover this.

Funding an NFT incurs a gas penalty to stop griefing, and each person claiming gets refunded the first one they hit.
squeeze is iterative, and goes from oldest to newest.
squeeze completes each change before moving on.
when it moves on, it checks what gas it has left, so it can be called multiple times.
qa stores the the content holders when they resolve.
when squeezing, each content holder is updated with a boolean saying if they claimed or not.
last to squeeze gets all the gas penalties.
store the largest content holder, since they get the residues of squeezing.  Or make the last to squeeze get all the funds.
Last to squeeze gets all the gas refunds.
QA should set the flags of all content holders high, so they get gas back for removing themselves from the claimed set.


upon qa resolving, the map of solvers is saved, and a bool flag set high to indicate unclaimed.

mapping of holders and their amounts.  Each one sets if they claimed or not.
claiming costs gas, and if the gas is higher than the reward, then nobody would bother.

store an int of how many holders remain unclaimed.  Decrement down each time a squeeze completes.  Last to squeeze gets all
Know what gas slot to reclaim since have the counter of where you are.  This ensures everyone gets at least one gas booster, with no costs to check if the gas booster is there.  If you are the last one, then you get every gas booster from
Can use modulo to give back every n gas boost, where only the residue is returned to the last squeezer.

Funding takes an extra gas slot.

Punishing all funders for the sake of spam seems annoying.

V4
The cost of withdrawal is the number of nfts 
Could store the nft index we are up to, to permit restarting when gas is low.