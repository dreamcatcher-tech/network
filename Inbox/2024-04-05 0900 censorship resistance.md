
>[!tip] Created: [2024-04-05 Fri 09:00]

>[!question] Targets: 

>[!danger] Depends: 

In our model, how any given person decides what is cannon is free to choose.
We could set up an eth contract that is periodically pegged to, which represents attested canonical version of our chains, and only once it has reached this level is it considered valid ?

Put slashes and punishments in there as the stakes.

Charge a fee to cover the eth gas.  Use cheap multi sig functions to store a large number of signatures in a small size.

Ideally we want to use tags to sign commits, and then generate merged tags using some sig scheme, so we can generate a single tag that represents all the individual ones, so anyone doing checks doesn't have a thousand tags lying around.  It would be enough to hand over x number of tags.

Run a top level chain designed to be pegged in to - the peg requirements are programmed in, and then if you enough signatures, you get accepted into the peg, which is much more reliable than just what you might be running.

Having gateways to go to and from other digital assets is key. 
We could set up an intrinsic token, but only so there is internal value that can be used natively, like staking, and the fastest possible clearing times, without any reliance on an external party.

Simplest pegging mechanism is BLS where we store the combined sig on eth and a pointer to the hash of the list of public keys that were used.

Meaningful merges - if an outcome is hash different but effectively the same, it is valid to switch signatures to it.

The trouble is being able to trigger an eth payment with a small number of signatures.  EIP-2537 will enable doing something based on a BLS signature.  So we could line up transactions in a queue, and if the BLS sig passes, then the tx is approved.

Eth contract would check a proof, which is a hash based path down to the ethereum transactions that this signature approves.  Could just be a list of ints representing queued up eth transactions that our chain approves, with anything not approved needing to be resubmitted to eth.
Or, each tx has a hash proof that gets submitted to the chain, along with the transaction.

Hopefully we can have good modelling and reasoning to prove this scheme is robust.

Once we have good eth integration, we can use their assets and contracts.
We can be an AI layer atop ethereum, where our AI operates the smart contracts on behalf.
Hopefully we can get native integration as our own bank or something, but in the meantime, we can integrate with these other payment rails.

A decentralized bank would put its power in the hands of its depositors.
