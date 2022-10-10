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

## V2
Use cloudflare VPN as a way to expose the local app using SSL

## V3
Run the app on the LAN, use cloudflare to expose it enough to generate an SSL cert using lets-encrypt.
Domain set a DNS record to point at the LAN address.

## V4
Generate a domain SSL cert and DNS address that is trusted by the clients.  Let them access the server directly.