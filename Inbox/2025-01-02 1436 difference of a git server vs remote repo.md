
>[!tip] Created: [2025-01-02 Thu 14:36]

>[!question] Targets: 

>[!danger] Depends: 

Remote repos are handled by push and pull, but we want to not actually download the whole repo, so we are acting like a browser.

A good rule is that the client should not need to know about the internals of git, so they shouldn't need a git library.

We then take on the role of a filesystem provider.

We should use urls to indicate:
* the id or dns name of the repo being fetched
* the branch to fetch on it

query params are used to do different things:
* watch => sends down SSE events when a new commit occurs, starting with latest commit
* latest => returns the latest commit immediately

POST
- objects that have changed on disk, receive back a hash
- commit (supply the commit object) - can only work if head is referenced as the first parent and all the referenced objects are present on disk
- ping - check that the server is alive
- check - check if the api key is valid and working
- createRepo ( name ) - create a new repo 


push up the objects we want to update.
check if an object exists, since objects could be large, so we might not want to update them.


this seems to be another module, but where would it fit in exactly ?

If we define an ts interface, then we can bridge it across a web interface.


???? is this interface the same as the NappApi interface ?