
>[!tip] Created: [2024-04-17 Wed 17:07]

>[!question] Targets: 

>[!danger] Depends: 

When a large number of branches are merging back to parent, they end up each dumping a pool request on the queue to be processed.

If we knew that there were already pool items in the pool, we don't need to make a new queue item for us.

Use a sum, so we up the multiplier, and so if at the end this number has increased, then we will send a new pool request out.

