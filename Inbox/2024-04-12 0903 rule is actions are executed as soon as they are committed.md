
>[!tip] Created: [2024-04-12 Fri 09:03]

>[!question] Targets: 

>[!danger] Depends: 

The less options given to the execution, the faster replay can be, so there isn't some extra info that the proposer is including.

Should ideally be able to have everything be deterministic as soon as a commit is made, and from there on, it is just checking, rather than needing to get the next commit to even know the execution context for a thing.  

What it returns and when is permitted, but only within some safety boundary, so if the validator completes but then for like, a minute there is no commit of the result, that is a fault.