
>[!tip] Created: [2024-05-14 Tue 14:29]

>[!question] Targets: 

>[!danger] Depends: 

Since our queue processors are idempotent, we should just carry on executing our pick of the transmissions, whilst also pushing into the queue.

The queue gives guaranteed operation, but we immediately start processing the transmissions, in parallel, as fast as we can go.

Basically just keep processing until the isolate is exhausted, knowing that queues will catch up if we fail at any point, and they will keep going too.

Must be careful not to saturate, so if there are a large number of parallel calls, we should restrict this ?