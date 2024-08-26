
>[!tip] Created: [2024-08-27 Tue 10:42]

>[!question] Targets: 

>[!danger] Depends: 

Seems we can import directly from jsr.io in running code.

If we did this inside a webworker that was hardened using an ses compartment, then we could run arbitrary modules that people wanted to include.

Makes the tools be more dynamic, and more like an app store.

If each user was running inside a subhosting environment, truly isolated from everyone else, this is a better model for making us act as a network.

Could make these files available in a deployment of our own, so they get published from urls.

BUT cannot be determined at runtime - needs to be referenced at deploy time.
So still need some tricks to get around it, like a worker that uses a blob url.

May need to make our own registry or set of deployments that creates a new deno deployment whenever the source code changes, which gets remotely called by the running artifact.