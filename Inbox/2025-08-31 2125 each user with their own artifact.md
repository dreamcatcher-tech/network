
>[!tip] Created: [2025-08-31 Sun 21:25]

>[!question] Targets: 

>[!danger] Depends: 

Ideally they each run their own cluster and their own database.

we pack them together for economy.

so there is still a central db there, but it doesn't make new actors on demand, rather it requires one to be made.

is the router on the same domain as everything is ?

where does artifact fit in here ?

if you come in, have no clerkid, then you get pointed at the base app, that encourages you to sign up.

if you come in to any subdomain, then

we can allow you to indicate app with a rul param, as well as a subdomain.

we can use fly replay so that the routers just instantly pass the requests to the internal apps based on the subdomain in a wildcard.

ideally each app would have its own welcoming agents ?

the replay router also controls the infrastructure router.
if we don't do subdomains, then we need some extra stuff in the path, which is confusing.

what to deploy ?

- an instance of artifact with no auto provision of actor repos, as an external mcp server
- the default app for when no user app is found, with the concierge agent
- a front end agent router, that defaults
- the infrastructure app, with the power to make new machines, by receiving an mcp call


is the infra app just an mcp server running on artifact, on a specific repo, maybe the host repo ?

If the seed repo was the one that held the keys to allow it to run infra calls ?
we do need that to be a bit separate, since it has some special powers, so don't want it running untrusted code.  
It could be just a pure mcp server ? it would only accept calls from the agent router, since that handles permissions.
Only the router can ask for a new app.
Only each app can ask for machine management.

Or the fly controller could be a regular mcp server but it just uses a different key for each request.
We can know what app the request came from by the flycast secure headers.

so we make the app gateway agents responsible for firing up other agents.
if you come in looking for an agent that has been put to sleep
the responsibility of the router is to point you at the gateway agents, and then they will point you the rest of the way.  This avoids too much responsibility on the router.  It JUST finds the right app.

So we can map out the call types that need to be responded to, and detail how each one gets handled.