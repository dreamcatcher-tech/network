
>[!tip] Created: [2025-08-12 Tue 21:05]

>[!question] Targets: 

>[!danger] Depends: 

often times operations will not conflict.  in those cases, we should be able to merge between validators, not require another round, and move forwards faster, since they don't need commit correctness, they need to all agree on how they got in there.

So for example two transactions that were both valid but didn't interfere with each other in any way, these should be able to be merged without rerunning them both and making a new chain - each side runs the bits they don't have, and then agrees on the next state, agreeing that the order of application was different, and recording both as a termporary divergence, but that they agreed on the final state in the end.