
>[!tip] Created: [2023-03-13 Mon 11:17]

>[!question] Targets: 

>[!danger] Depends: 

If we use these streams thruout, then we can attach webworkers as stream processors.
Channels can be modelled as async iterables ?
So writing to database, recovery, can all be an async iterable, which could easily be swapped for a channel, or something hardware based, allowing the engine to be run inside itself, by switching out how the service queues are consumed and resolved.

If channels are considered iterables, then reducers can be stream processors ?