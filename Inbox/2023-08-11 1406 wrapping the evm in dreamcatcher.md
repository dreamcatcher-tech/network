
>[!tip] Created: [2023-08-11 Fri 14:06]

>[!question] Targets: 

>[!danger] Depends: 

Solidity has its place for making a mission critical core that can be relied upon to maintain correctness under all possible conditions.  Wrapping this state and only allowing changes using ABI calls can give a security core to our applications.

We can also instantly ingest all the evm applications and make them run on our chain, and provide methods for our apps to interact with them directly.

Can apply pool filtering where certain tx are banned, and we can verify that each evm block honoured the ban config at that point in time.
Version the bans, so that the pool filters can be applied over time.  Store the parameters in the chain somewhere so they can be modified.