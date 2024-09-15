
>[!tip] Created: [2024-09-15 Sun 20:23]

>[!question] Targets: 

>[!danger] Depends: 

instead of sending each action to the queue, large numbers of actions should all be processed at once.

exe could be processed in webworkers to determine saturation.

Only if the resulting actions fanned out more, would a queue action be used.

Basically we should be batching things that would go into the queue, provided it is done deterministically, so a failure will trigger the same thng to run.

We should be able to make a TLA+ model of this operation, so we can be confident in our model of consistency, and can handle strange things like large data sizes.