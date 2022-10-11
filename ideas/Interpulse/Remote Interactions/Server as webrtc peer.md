>[!tip] Created: [2022-10-11 Tue 11:31]

>[!question] Targets: [[Demos with no SSL certs]]

>[!danger] Depends: 

This solution needs to only allow LAN computers to connect to the server as it will have sensitive customer data.

## V1
1. Host the page on gh-pages over SSL
2. Use a signalling server remotely using SSL (or just use the demo servers)
3. Set up nodejs as a webRTC peer
4. Connect to nodejs using webRTC from the browsers
5. Security is done by manually adding each browsers chainId to the server to let it in

The main page can be cached by a service worker so that if a network outage occurs, it should still work.  Hopefully webRTC information lasts ?

Might allow for fully remote access to take place, if the remote device was whitelisted on the server.

## V2
Use cloudflare VPN as a way to expose the local app using SSL

## V3
Set a DNS record to point at the LAN address.
Generate a public SSL cert.
Dos and webpage both pull the certs in and serve them up on different ports.

## Proxy to DOS
vite can be set up to serve over https and proxy certain urls.  We might be able to expose a single port on the lan and proxy libp2p calls to DOS, where dos has no encryption.  Websocket address would be in [multiaddress format](https://multiformats.io/multiaddr/) such as: `/dns4/foo.com/tcp/443/wss/bar` but not sure libp2p can work like that.

## Running a signalling server
Docker image for a [signalling server](https://hub.docker.com/layers/libp2p/js-libp2p-webrtc-star/latest/images/sha256-c4e75e1cef07c048180b5ae957f373889a51098fbf951e3c616a40f03131e6ec?context=explore) which could be run locally.  Would need to be put behind an nginx proxy or something to make it ssl capable.  Or we could proxy it thru vite.

## Implementation
Get vite serving the dev server over https locally.
serve using certs on remote computer.