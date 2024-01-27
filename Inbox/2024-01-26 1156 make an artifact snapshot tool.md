
>[!tip] Created: [2024-01-26 Fri 11:56]

>[!question] Targets: 

>[!danger] Depends: 

So the first time we load this particular repo, an isolated snapshot reference is held around, and then all the tests that use it again will just use the same isolated instance, making test runtimes much faster.

It is booting based on git commits.

This same tooling can be used to load up the chain in a particular state, and begin executing there, when we're tracing problematic errors.