>[!tip] Created: [2022-10-11 Tue 11:31]

>[!question] Targets: [[Demos with no SSL certs]]

>[!danger] Depends: 

## V1
1. Host the page on gh-pages over SSL
2. Use a signalling server remotely using SSL (or just use the demo servers)
3. Set up nodejs as a webRTC peer
4. Connect to nodejs using webRTC from the browsers

The main page can be cached by a service worker so that if a network outage occurs, it should still work.  Hopefully webRTC information lasts ?

## V2
Use cloudflare VPN as a way to expose the local app using SSL

Weakness is that the central page needs to be available, or

Question is: can webrtc peers be stored and connected to locally ?