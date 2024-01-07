
>[!tip] Created: [2024-01-07 Sun 20:05]

>[!question] Targets: 

>[!danger] Depends: 

Ledger format is used to keep track of all the trading the occured for parts of this NFT.
The format and rules are pulled from some higher place, and all of them record their own ledgers to track everything and compute accounts.

Sending in Eth would decrement the ledger for the account that sent it, and then increment the account of the NFT, while as a swap, the balance of the sender is allocated a portion of the NFT.  We could therefore make the balancing of accounts be a fundamental system governed thing that can drawn upon by authors as a concept that is well tested and understood.

We should use json so that non AI based systems can process this info too.

Or, we could implement the opentransactions format, since receipts can be easily issued from a central source.  These would form rows on the ledger, where the ledger contains the contents, and the other opentransaction format data is inside the commit message, or similar thing.