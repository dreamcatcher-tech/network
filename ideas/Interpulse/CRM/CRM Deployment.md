## Deployment
Start nodejs version with a preset listen address in code.
Start browser, connecting to preconfigured address.
Browser auto mounts the remote chain address.
Let the browser clients interact - observe their changes on each other

Load a page on a single port which also holds the DOS libp2p port.

Problem is the server might need an ssl cert 

## Phase 1: Demo
Run directly out of the `dreamcatcher-stack` with a webpage hosted with `vite serve`.
Benefit is that a single pull updates everything.  Might run `vite dev` so get HMR for rapid updates.
As stability increases, publish the page on gh-pages, so the clients have a better SSL based experience, possibly using the the server as a webrtc peer, then no certs are needed on that peer

PeerId of the server is baked into the code using [vite env variables](https://vitejs.dev/guide/env-and-mode.html#env-files). When the DOS version runs on the server, it sets `VITE_PEER_ID` with its public key and `VITE_APP_ROOT` with the CRM chainId.  This should get loaded into the client page and read from `import.meta.env.VITE_PEER_ID` and `import.meta.env.VITE_APP_ROOT` which can be used in conjuntion with `window.location` to build up a default multiaddr and peer:address mapping.

This remote info is added in at boot in the client.

### Page Load
1. Navigate to http://192.168.0.123
2. Page boots and has server peerId built into the page, along with the chainId of the crm approot
3. Page automatically displays the latest CRM installation



## Update a deployed instance
Be able to pull down new code, ensure the current data is still compatible, then publish the new version for use by the clients.

## Using github actions
Fork the repo somewhere private, and when ready to push an update, PR across to this fork.

1. Install a self hosted github actions runner on the host machine.
2. Set up a server using [InstallUtil](https://learn.microsoft.com/en-us/dotnet/framework/windows-services/how-to-install-and-uninstall-services) to do `yarn dev` and start the vite dev server using nohup
3. ga pulls on any new code, runs all the tests, if pass, copy over, restarts the service
4. tail the nohup logs so they are visible on the github actions screen

## Fresh Install
Each time a customer is updated, the products like is updated automatically.
1. Import all customers from moneyworks file
2. Import any customer updates from moneyworks live
3. Import the redux state from state.json
	1. Pull in the sector geometry
	2. Pull in the gps locations

## Update


## Recovery

## Use PM2 as a server monitor

