>[!tip] Created: [2022-10-03 Mon 10:52]

>[!question] Targets: [[requests/Interpulse]]

>[!danger] Depends: 

A set of demos that indicate true peer to peer functionality has been achieved
## Two engines connected
In a jest test, start up two engines, each listening on a different tcp address. Tell the first one to dial the second.

Then mount the crm app stored on one inside the tree of the other.
Write between one and the other.
## Node and webpage connecting
Start DOS A in the terminal. Issue commands to start listening on tcp socket.

Start DOS B in another terminal, mount the remote DOS and mount DOS A somewhere in the tree.

Start DOS C in browser.

Observe all DOS instances able to make changes to others, and perceive the change. Observe the change made by A to B being perceived by C.

Be able to set networking parameters directly in DOS instance with a command.

## Peer Browsers
This is the ultimate in connectivity. DOS A is a server on node, DOS B and DOS C are browser instances. DOS B can mount something on DOS C and interact, by using DOS A as a webrtc signalling server.

## Web persistence
Make a permanently hosted version of the app that offers long term persistence to users.  They can load up their browser, control their own chains, but on a new browser they can log into their existing data.  Apps can be hosted and stored persistently here.

## WARNING mountloops
Need to ensure spanning tree protection is in place to stop endless updating. A mounts B with live subscribe and B mounts A with live subscribe, there would be endless updates.

Maybe exclude changes to the mount as part of the approot change, or deny subscribtions that are nested ? Denial can occur when walking the tree.

How does Linux handle this problem ?