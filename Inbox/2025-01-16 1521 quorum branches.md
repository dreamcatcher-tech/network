
>[!tip] Created: [2025-01-16 Thu 15:21]

>[!question] Targets: 

>[!danger] Depends: 

If a group of nodes find themselves split from the net, then they can continue to make writes and then agree on the shared branch between them all.  They would recognize that the master branch has no ability to respond to them, and then when they find each other, they sync on the latest version of master they have, and then fork a local quorum branch, then merge in their individual branches with changes the same as if they were talking to the server.

Each individual node actually makes its changes on a separate branch anyway and then attempts to merge it with the main branch.