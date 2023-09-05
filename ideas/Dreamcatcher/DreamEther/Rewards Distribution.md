
>[!tip] Created: [2023-09-01 Fri 09:50]

>[!question] Targets: 

>[!danger] Depends: 

Each time you withdraw, we would withdraw at the ratio of total held to what you put in. 
This means that if you put in lido, and then you earn lido, that you would be able to withdraw a fraction of the rewards that were acrued since you put in.  Might have to take snapshots whenever you put funds in, which suggests we want to take a snapshot of the totals whenever someone puts something in.  We should account for this in our fund calculations, so that we call external asset `balanceOf()` functions when determining the balance of what is held in each change.

So we would need to track the total number of units we were tracking internally, to prevent later funding being treated like rewards.  Rewards are the difference between our tracked amount and

Could track rewards as a separate value, which can be manually updated, and causes later callers to get a larger withdraw value, rather than last to withdraw getting the residue.

When you fund, we record how much you supplied, and what the total we have plus the rewards are, which can be done in a single final call to balanceOf.  rewards since you put in are tracked, and withdrawl gives you a share of those rewards.  BUT smaller additions get an unfair portion of rewards that get paid for earlier larger contributions ?

What if rewards goes down from withdrawls, then new rewards come in, how would we know that the later contributor is due those rewards ?

Purest but most expensive is to generate an address unique to each depositor and change.

This should allow an erroneously transferred token to be reclaimed by going thru any of the exit paths.  A 721 token cannot be claimed in this way tho.  We should therefore reject all 721 deposits outside of a `fund()` call.  We could however, let the last withdraw of a 721 contract receive the residue.

This should be applied for erc1155 tokens, erc20, eth, and maybe 721s.

Track the holders of each token type so we know when you're the last ? 
Or just count the number of holders ?

Negative rewards need to be accounted for.

Whenever you deposit, we store the total and how much you put in.
Whenever you withdraw, we take what you put in, 
We store what the reward pool is (plus or minus) what the total balance of the contract is, and what you put in.  When you withdraw, we take what you have, what the total balance is, and what the reward pool is at.

Principle is that you should gain or lose your portion of what you had in the contract before withdrawing.  