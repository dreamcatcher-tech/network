
>[!tip] Created: [2024-05-14 Tue 14:29]

>[!question] Targets: 

>[!danger] Depends: 

Since our queue processors are idempotent, we should just carry on executing our pick of the transmissions, whilst also pushing into the queue.

The queue gives guaranteed operation, but we immediately start processing the transmissions, in parallel, as fast as we can go.