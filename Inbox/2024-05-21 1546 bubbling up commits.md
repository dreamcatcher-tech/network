
>[!tip] Created: [2024-05-21 Tue 15:46]

>[!question] Targets: 

>[!danger] Depends: 

Should a new commit be made for each parent up to the root ?
Or, should the tree of PIDs be periodically synced into the head ?
So HEAD becomes quite hot ?
Or use a specific branch, which is used to track the packed refs and is the canonical reference ?

Trouble is the bottlenecking.


This is the packed-refs file in git, and we should maybe generate this and hash it periodically.