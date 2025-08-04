
>[!tip] Created: [2025-08-04 Mon 22:49]

>[!question] Targets: 

>[!danger] Depends: 

Each node can nominate a string of other nodes that in order will take its place if it becomes unresponsive.

also when it novates, it can bring a new node into the cluster, and then say at what height it will swap out.

this is done so that a node never needs to swap its keys out at any point, so it brings in new nodes rather than moving its keys around.

then having nodes that step in when its offline - these nodes can be warm standby.

useful in cases where the node is punished for being offline.