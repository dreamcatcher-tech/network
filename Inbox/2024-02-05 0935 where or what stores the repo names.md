
>[!tip] Created: [2024-02-05 Mon 09:35]

>[!question] Targets: 

>[!danger] Depends: 

Artifact the object is an API into the whole system.  It is called by incoming web requests.  It can act on any branch in any repo.  It has not meaning to store the branch and repo anywhere as these are different on a per request basis.

the Actor is the authenticated person initiating the calls into the artifact cloud.

But if the branch is unique due to its hash, then should we just store it flat, rather than use a path of keys to it ?  If we do not store the path, then we have to store a pointer to the parent, which is an extra db write, and could result in multiple kv reads to get all the snapshots required to test if a file exists or not.

Using nested branches allows a rapid lookup of all the snapshots that made up this item.  This is a temporary measure since a native git implementation will not have these issues.

We can support deeper paths, but we would name a special branch as the pointer to a deeper branch key.

Limitations:
1. paths cannot sum to more than 2048 ? unless we add some method to handle this
2. branches are named using 8 chars of the commit that bore them - this is subject to collisions and may need to be increased to the full commit