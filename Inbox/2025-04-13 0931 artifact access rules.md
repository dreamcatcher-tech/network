
>[!tip] Created: [2025-04-13 Sun 09:31]

>[!question] Targets: 

>[!danger] Depends: 

Only the external requests need to provide a commit to begin their search for an object. Under the hood we would actually be free to pool all objects and treat them as one and the same, provided we didn't delete them unnecessarily. 

We might just store a counter of the number of times each object is used. 
Offering forever storage, global deduplication seems critical.