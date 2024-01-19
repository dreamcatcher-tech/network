
>[!tip] Created: [2024-01-19 Fri 13:00]

>[!question] Targets: 

>[!danger] Depends: 

If we were strict about how we commited things, then we could make a branch of the blocks where the current accepted one is the head, and all uncles are branches.
The state changes could be expanded out inside the commit, so we could look them up quickly.

We could reach our own consensus by validating the eth block and signing the commit with our own verification, so we can provide a consensused view of what ethereum is to us.

Separate branch can be kept running for the mempool

Keeping this wrapper up would be paid for by fees of those who use it.  Sending tx in could be done by publishing to, then we would relay that into the txpool.

Bridging can be done by having a multisig wallet that acts as the bridge.  So the relay can be independent of the bridge, and the bridge can have staking pools and other mechanisms to keep things honest and lively.

When more advanced signatures are available inside solidity, then we can widen the pool of signers.  We can at least protect the signing behind our consensus, 

Heavy and slow means that many bridge members are needed to approve a payment.
We can make the number of signatures depend on the value of the tx, and also the charges will be proportional too, since the gas will be higher.
Light and fast means only a small number of approvals are needed, and the function calls are all pooled so ultimately the cost is just the gas cost of the tx being relayed itself, if the pool size is big enough.

The queue just keeps trying until it runs out of gas, and then closes off the queue.
Bridge members 

The single contract could be used by arbitrary groups of bridgers, where they can form queues of transactions that they will sign to enact.

You pay some fees to put the tx into the eth chain, and then extra fees that are dispersed to the approvers once they all submit signatures that approve the release.  These approvals can just be the height of the queue, and when any given set of approvals is given, then anyone can drive the contract forwards to get the rewards out and to execute the txn.
Each slot in the queue has its gas allocation as well.

The driver gets some rewards too, which should be proportional to the gas they used.  Drivings can be targetted per slot in the queue, or they can be general, where you can queue up to be the next best offer.  The contract takes the lowest offer of driving until the queue is empty.

Separating out relaying, signatures of approval, and driving helps keep livliness going.  Gatekeepers have very low gas costs for approving, but they get slashed if they did something wrong, or were offline for an extended period of time.

? gas refunds back ?
? rewards sent back to the sending contract ?

In this way, we could be able to interact with uniswap directly, where we would do buffered trading internally, and would periodically call out to the bigger pool.  