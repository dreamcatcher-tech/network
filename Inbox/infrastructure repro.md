It would be of great benefit to make a system that was one level higher than code where we could treat the system like part of a test or a reproduction so something like Docker, where each layer represents a step in the build up to prove a point or test the particular state. 

When they were higher than this, it would be nice if there were ways to replicate infrastructure. Multiple computers in coordination might not be so simple, but if we had a hyper-conversion system where Artifact was used to interact with the infrastructure, we should be able to spin up isolated versions of this infrastructure and query it and interact with it.

Furthermore, these might have tooling that allows a fully virtualized version to be created to prove a point. 

If we have real infrastructure, reproduction might be sharing the hash of the state of the overall system so that we can guarantee the correctness of our calculations. This can allow us to highlight discrepancies in the stack which may include silicon or software or some edge-case states that we had not considered These edge-case states can then be used to feed into a TLA+ model. 