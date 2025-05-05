
>[!tip] Created: [2025-05-05 Mon 15:08]

>[!question] Targets: 

>[!danger] Depends: 

Instead of sharding simply by file name, we could additionally have a try with a bucket structure that can rebalance itself or insert new records depending on whatever the file name was. This would mean that we could do very quick lookups by name and we could handle an almost unlimited number of items with good balancing characteristics. The current solution we have for sharding copies the Git-on-disk model, and that may not scale to an unlimited number. 