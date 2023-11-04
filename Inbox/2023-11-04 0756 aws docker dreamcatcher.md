
>[!tip] Created: [2023-11-04 Sat 07:56]

>[!question] Targets: 

>[!danger] Depends: 

Set up AWS docker containers as network nodes that make libp2p connections with clients.


The goal is that it never tells a client that something has been done until it has definitely been done.

We could make the client connect to several docker nodes, and in fact receive gossip about new ones, and then only when multiple nodes have acknowledged its response does it stop trying to send it in.