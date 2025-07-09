
>[!tip] Created: [2025-07-09 Wed 19:38]

>[!question] Targets: 

>[!danger] Depends: 

a lamport clock means we look at all the messages, and then we just pick the next biggest number to put in there.

When there is a tie, we use the public key of the actor to settle the tie.

So we just six pad the messages, will allows for a million messages max, then just order them lexigraphically.

