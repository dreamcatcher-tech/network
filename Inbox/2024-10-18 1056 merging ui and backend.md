
>[!tip] Created: [2024-10-18 Fri 10:56]

>[!question] Targets: 

>[!danger] Depends: 

The UI being separate allows it to drift away, and also requires two deployments.

It is a vite site, so needs an npm build, so we don't have issues with building, however it could be kept completely separate in a workspace.

We do not have much control over the serving at present.

We need to be able to show longs and response times, like hono.

We could make a hono main.ts file, and serve the static files this way ?