
>[!tip] Created: [2024-03-18 Mon 20:13]

>[!question] Targets: 

>[!danger] Depends: 

Probably would be the api object - this should encapsulate the state of the fs at a particular commit, and can be used to drive towards a new commit.

Making it an object means we can treat it more fully.

After a commit, this object is the same object, it just has new commit reference.