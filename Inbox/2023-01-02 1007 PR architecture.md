
>[!tip] Created: [2023-01-02 Mon 10:07]

>[!question] Targets: 

>[!danger] Depends: 

The method of informaiton moving thru the network should always be by PR.

Merge may be rejected because master said it had conflicts - means the requester needs to merge master in first, reconcile, then try again.

Each reducer would be given the option to reject a PR, otherwise if the system can merge without conflict, it will.

This architecture means each actor is doing the exact same operation - trying to get their changes merged in.  So a client with no validator permissions can still fork the validators chain and promote its changes between all the other clients, allowing them all to reach consensus even tho they are offline.

## Validation
Validators execute inbound actions from other Complexes and continually try to merge with each other.  Each time they merge another validators chain, they sign it, so consensus of varying levels is achieved rapidly.  Validators can sign something that is different to what they have since they can merge in one of their states that came before their unique changes, to get the agreed head into consensus as fast as possible.

Two validators with a high speed connection can achieve consensus rapidly, and operate on that, while the rest of the network can catch up as fast as possible.

The tip of each validator is its pool, so this allows other validators to catch up as well, by validating the other branch, then merging in.

## Conflict Resolution
Use [Pijul](https://pijul.org/) to make the merge less conflicting.
May allow action order to be modified ? Or only consider the resulting state, since the actions should never be read again and serve only as the audit trail.  Be able to indicate the actions are independent, or test them by running both in different order, so can know what is cummutative or not.  Once the commutative check passes, then we can merge the combined diffs of the next state.

Independence of changes is helped greatly by multichain.  Each chain represents a piece of state that is independent from the other chain states.

## Inter Complex Comms
So the majority of operations happen within an app complex, with the result being a PR against master app root.  Some operations are between network connected chains, and again this is a PR based option between chains.  The inbound and outbound channels would be separate and so could be merged independently.

## Modelling
Pool is an object
Branch tip is just HEAD + pool.
Validators sync with each other by continually seeking to merge with other validators.
BFT busting would be easy - can just share the branch of a validator showing different commits being signed.
Each message from the other validators includes all the included messages from other validators, so Byzantine behaviour is super easy to detect.

Make an algebra that describes how any blockchain system must work - anything with history and consensus.  Show the performance in terms of how many round trips are required to reach the next usable state.

Consensus is always a function of time.