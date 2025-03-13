
>[!tip] Created: [2025-03-13 Thu 13:15]

>[!question] Targets: 

>[!danger] Depends: 

When deleting a branch name, we will have to actually store a tombstone, since we cannot rely on GET as being strongly consistent.

GET seems to, if something is deleted, return the cached data.

But if it always returned the latest data, then we could safely rely on it using tombstones.

What if we used a little local postgres to store the pointer to latest ?