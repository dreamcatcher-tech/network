## Deployment
Start nodejs version with a preset listen address in code.
Start browser, connecting to preconfigured address.
Browser auto mounts the remote chain address.
Let the browser clients interact - observe their changes on each other

Problem is the server might need an ssl cert 

## Phase 1: Demo
Run directly out of the `dreamcatcher-stack` with a webpage hosted with `vite serve`.
Benefit is that a single pull updates everything.
As stability increases, publish the page on gh-pages, so the clients have a better SSL based experience.  
If the server is a webrtc peer, then no certs are needed on that peer

## Update a deployed instance
Be able to pull down new code, ensure the current data is still compatible, then publish the new version for use by the clients.