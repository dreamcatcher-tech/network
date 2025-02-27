
>[!tip] Created: [2025-02-27 Thu 15:44]

>[!question] Targets: 

>[!danger] Depends: 

tests:
1. If I deposit then withdraw, and the external balance did not change, I should get back exactly the same amount.

Basically if we have a drain address, we can tell any other token balances to be sent to the bung address.  Uses the standard transfer operations to do the drain.  So if you send DAI to it, we can drain it.

This is like the bung in a boat, and we can call drain to the bung address any time.  We would need to specify which balances it was meaning.


## Use a “Pool Share” Model

The general pattern here is:

1. **Deposit**: When Alice deposits N tokens into the escrow, she gets minted some number of _share_ tokens (which your contract mints internally). These share tokens represent a proportional claim on the underlying yield-bearing token balance of the contract.
2. **Accrual**: Over time, the contract’s token balance grows because of yield distribution (rebasing, or reward tokens, etc.). The contract itself (as the holder) will see its balance increase, but the share token supply stays fixed in number—so each share effectively grows in value.
3. **Withdraw**: When Alice redeems M of her share tokens, she gets a proportional slice of the contract’s underlying tokens plus their accrued yield.

This means you don’t try to track “who deposited how many tokens at what time” directly; instead, you track “how many share tokens were minted vs. total shares outstanding.” That ratio is used to figure out how much a share is worth at any given point in time.

**Implementation outline**:

- Have an internal `_totalShares` variable.
- When someone deposits yield-bearing tokens, you calculate how many shares to issue using something like
    `sharesToMint = (totalShares == 0)   ? amountDeposited   : amountDeposited * totalShares / contractTokenBalance`
    
    (Be careful with zero-sum conditions for the first deposit, etc.)
- When someone withdraws, you calculate how many underlying tokens they get back using
    
    `amountToReturn = userShares * contractTokenBalance / totalShares`
    
- You burn their share tokens and transfer them the correct portion of the underlying tokens.

**Pros**

- You never have to individually keep track of each user’s “start-of-period” reward balance.
- The math to figure out each user’s share of the yields is straightforward.
- It handles an arbitrary number of depositors gracefully.

**Cons**

- If your tokens are purely rebasing (like stETH) as opposed to distributing separate reward tokens, you have to ensure your contract calculates “balance” in ways consistent with how the token rebases.
- In the case of distributed reward tokens (like a DeFi protocol that might drop an additional ERC20 as a reward), you also need to decide how to handle those. Usually, you track them in a similar “pool share” approach, or you auto-claim them as they come in, add them to the pool, and let them be distributed proportionally.