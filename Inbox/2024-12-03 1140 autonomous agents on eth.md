
>[!tip] Created: [2024-12-03 Tue 11:40]

>[!question] Targets: 

>[!danger] Depends: 

Is it possibly sufficient to run AI models deterministically using chainlink, and rely on eth as the decentralized mechanism ?

Use chainlink functions to be able to make several calls out to an AI provider ?

Or, take several api calls, and then aggregate the results ?

This could be autonomous, but the censorship resistance is only as strong as chainlink.
The fact that chainlink has a ToS that needs to be accepted before use says what limitations there are.

We could definitely run the funder oracle in this way, and run it separately from the wider dreamcatcher.  So stuck NFTs are kept independent from the ai funder, which invites you to buy a token and it makes AI powered decisions for you.  It can be upgraded itself by using a separate QA that verifies when the code has run better.


What about if we used chainlink to call artifact functions ?
Then we have napps being called, from chain.

We would deploy a front end contract, and incoming requests can go into eth, then our contract would trigger calls that get made using the oracle network, which then calls our network of independent operators ?

Maybe artifact could be a layer 2 on eth, where eth holds the funds, and the config of the bots - holds the basic brains of the bot.
The bot hash and data can be synced to eth periodically, representing its life, or its soul, so to speak.  Then when it executes externally, this updates.

Can make a nice way for people to sell agents, too, since they can rent them out to be used, making it worthwhile to prompt up nicely.