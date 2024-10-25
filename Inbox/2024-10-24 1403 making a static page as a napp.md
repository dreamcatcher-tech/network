
>[!tip] Created: [2024-10-24 Thu 14:03]

>[!question] Targets: 

>[!danger] Depends: 

Could we present a static web page as a napp ?

Single module that reads from jsr, gets the latest, and then presents it back, caching along the way.

The browser will come in looking for an index path, and we could serve a static file at a given path.

Part of the json interface is the files interface.  This is retrieved using get requests.

Allow a repo to have a subdomain, and then requests that do not specify a branch get the main branch, and without specifying.

So we could serve a static page from a jsr package, or we could run a repo in artifact, possibly updating with webhooks, and then serve the static assets just like any other repo gets served.

Can work on the page in artifact, using ai tools, then commit and tag to git as a backup, then serve the latest version from the merged repo branch.