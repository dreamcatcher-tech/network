
>[!tip] Created: [2024-01-19 Fri 09:15]

>[!question] Targets: 

>[!danger] Depends: 

An error in a solidity contract that is off by a single char can cause catastrophic failure - the amplification of detail is about as extreme as it could possibly be.

If we were executing these things with NL, then if errors occured, they would be softer, since they would be close to what the intent was, rather than weird faults that nobody expected - they would be close, not radically and wildly far, like re-entrance attacks.

So if we had mixtral running, and possibly beluga as a safeguard, then the chance of getting catastrophic faults is very slim, and finding a fault with these models would be much better and broadly beneficial than a fault in a particular instance of a solidity contract.

Plus if it ran a model checker alongside, the chances of fault diminish acutely.

If the contracts were arranged in hierarchy of rules, so the top level goals overrode the lower ones, then when a detail goal has a weirdness, it can read the top level rules.

Some contracts might purposefully allow people to argue with it before the finality is set, so that the contracts can be launched looser, and if you can convince the bot, then you win.  These are great for things that are hard to define up front.