
>[!tip] Created: [2024-01-05 Fri 12:30]

>[!question] Targets: 

>[!danger] Depends: 

Our chain would be eth aware, and so could know when funds have been sent to our chain.

We could make a bridge that had an unlimited number of validators.  So on our side, there is a fixed and large number of validators required to operate a bridge.

The bridge can have 100,000 validators, but we can require only a subset which can rotate randomly.

Slash funds are stored by each validator, and can be slashed by the other validators for bad behaviour.

The way it works is that a transaction is loaded up on the anvil, and then each validator on our side would generate and sign an eth tx that approved the current tx queue at some index value.  To be valid, a certain fee would have been paid in to the validators, set in the contract, by super majority.

When enough sigs have been received with enough diversity (say N buckets), the queue is moved to the pending queue.  An unlimited number of validators can use this system effectively, with number of validators affecting the price each tx needs to charge, so a balance will be found between security and price and time.

TX can be blocked from the queue too.

This means that many tx can be approved with only a fixed validator set.

Our chain would guide users thru this process, and make their txs on ethereum, plus explain each step to them.