
>[!tip] Created: [2024-01-08 Mon 16:30]

>[!question] Targets: 

>[!danger] Depends: 

Its definitely faster this way
NO - timing can cause a different result.
Executing anything sent to yourself seems plausible, as that order is completely guaranteed.
So the worker can stay active, but a commit is triggered when it wants to send an action to another IO channel.

You must commit before actions are relayed since the remote IO channels might have changed.

So the point of synchrony is message passing.  You can combine many functions wanting to do message passing at the same time, but this is indeterminate and so once chosen, the relay orderer declares it as such.  You must pick an order but any order will do.

Any order will do, but some orders can be biased, so we should check that somehow doing equivalency and some tolerance on out of ordering.

Make a useMemo hook that purposefully puts a boundary around expensive operations so you carry on as tho nothing happened.  This could be synchronous too, since it can be processed instantly and then returned from.