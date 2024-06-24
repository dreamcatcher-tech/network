
>[!tip] Created: [2024-06-24 Mon 14:09]

>[!question] Targets: 

>[!danger] Depends: 

each balance change, calculate the time since the last balance check, update the total elapsed staketime, check the new balance, allocate a ratio of stake time.

Then on withdrawl, calculate the holdings in staketime units, and let them cash this in.

? what if the rewards are not in the unit that is staked ?
then ownership is not clear, so can't do anything about this.  They would just go to the dust beneficiary account.  This account can be changed periodically.

Or, we can allow the calculation to be done in dreamcatcher ?
Then these complex calculations can be done using advanced tools, rather than in solidity.

If we permit deposits of escrow to be made for accounts not your own, then we can top up anyones holdings based on this dust collector account.