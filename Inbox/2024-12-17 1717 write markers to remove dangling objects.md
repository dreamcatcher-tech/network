
>[!tip] Created: [2024-12-17 Tue 17:17]

>[!question] Targets: 

>[!danger] Depends: 

If an attempt to update the HEAD fails, then there would be objects that were committed.

So we need to count how many times each item is written to the db, so that we can delete them without any issue.

If the write count went to zero, then we could safely delete the item.

