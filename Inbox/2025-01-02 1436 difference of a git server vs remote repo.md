
>[!tip] Created: [2025-01-02 Thu 14:36]

>[!question] Targets: 

>[!danger] Depends: 

Remote repos are handled by push and pull, but we want to not actually download the whole repo, so we are acting like a browser.

We then take on the roll of a filesystem provider.

We should use urls to indicate:
* the id or dns name of the repo being fetched
* the branch to fetch on it

query params are used to do different things:
* watch => sends down SSE events when a new commit occurs, starting with latest commit
* latest => returns the latest commit immediately

POST
- commit (supply the commit object) - can only work if head updates


push up the objects we want to update.
check if an object exists, since objects could be large, so we might not want to update them.


this seems to be another module, but where would it fit in exactly ?

If we define an ts interface, then we can bridge it across a web interface.