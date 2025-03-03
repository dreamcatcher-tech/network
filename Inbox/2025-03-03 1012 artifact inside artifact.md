
>[!tip] Created: [2025-03-03 Mon 10:12]

>[!question] Targets: 

>[!danger] Depends: 

Since all of artifact is provided by some actions that have side effects, we should be able to provide the same interface, but use purefuly on chain based structures.

This would let us simulate artifact.

The importance of being able to simulate a system within that same system is:
1. the key to self awareness, allowing a system to reason about and explore its own inner workings, without doing anything immutable or critical to itself, to better predict how it will behave.

Because having the ability to time travel debug, and to present bug reports as fully reproducible scenarios, is not possible if we used the real database implementations.

The database implementations need their own testing - conventional testing - since they are genuine side effects, but all the logic we run that relies upon them should be all pure functions, and so we should be able test more readily.  Even testing in pieces is better.

So what we're really doing, is minimizing the side effects that we rely on, and allowing them to be swapped out as an interface, then using pure functions to define the rest of the system, so we get repeatability, which is used for simulation of code changes, or of actions our LLMs are contemplateing.

So we are saying there is no type of computing resource that we do not supply as part of our interface.