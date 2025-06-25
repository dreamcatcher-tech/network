
>[!tip] Created: [2025-06-25 Wed 11:42]

>[!question] Targets: 

>[!danger] Depends: 

This would be the worker or cluster that would do the next commit, and so to get the latest, it is sufficient to watch that leader, because nothing will change without their say so.

Even if the leader moves, then it would respond with a redirect.

We could respond with fly replay when someone comes in looking for a particular chain, so we just redirect the request to the leader, or the leader manager.

We need to rely on machines being mostly available and mostly reliable, and then handle when they fault, rather than treating them all as about to die at any time.

Also a totally separate network, rather than trying to present the single network cluster as reliable, make it less reliable, simpler, but fail fast, and have concurrent redundancy.