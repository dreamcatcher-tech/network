
>[!tip] Created: [2024-03-20 Wed 19:59]

>[!question] Targets: 

>[!danger] Depends: 

should a splice be created that shows all child branches of a given pid ?
Allow a depth parameter, so it will give you all children lower than a particular pid.

Instead of a dedicated splice, just give the actual splices for all the children.

So the read parameter takes a `depth` param which defaults to zero.

Allows you to receive commits for

Splices should come down each commit, not just when the path changed, but no change has an empty path param.

Negative index splices is when you ask for something in the past.
Means we can deliver historical queries out of order, which is how the log gets read.

Pooling could use an atomic sum action to update the pool count so we never get dangling actions ?

Eager to test the thruput limits of the system - need to know how many concurrent openai calls we can make.

Splice could give some stats info on the `.io.json` file, like outstanding requests, resolved replies, etc.