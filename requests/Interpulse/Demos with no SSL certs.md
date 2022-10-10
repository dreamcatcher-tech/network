>[!tip] Created: [2022-10-11 Tue 11:30]

>[!question] Targets: 

>[!danger] Depends: 

In a demo environment, being able to set something up for a customer to consider rapidly and running on their LAN without having to issue SSL certs is useful.

Problem is that the nodejs server version will need to serve its websocket content over wss, which means a cert.  The browser pages have to be served over SSL or else we have no access to crypto libraries in libp2p.

Even in production, the need to host a nodejs peer on lan, to connect to sensitive infrastructure like accounting systems, is still needed, but we do not want to have to set up SSL certs each time