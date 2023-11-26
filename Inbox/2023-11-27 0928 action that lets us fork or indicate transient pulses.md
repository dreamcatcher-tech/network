
>[!tip] Created: [2023-11-27 Mon 09:28]

>[!question] Targets: 

>[!danger] Depends: 

When doing an async call out of the chain, we might receive multiple partial updates that don't need to be stored permanently, so we might mark the entry point with a function call, so that when the transient pulses have completed, then we would make a final pulse, thereby doing trimming of the paths in the chain.

It could act anaerobically - in effect holding its breath - passing no updates of state any higher until the hold is released, which means it can still process things, but it is running in a parallel branch.