
>[!tip] Created: [2024-11-06 Wed 10:50]

>[!question] Targets: 

>[!danger] Depends: 

The KV store should be used for atomic guarantees, and the hash store should be separate.

We have a hashstore that runs on the kv store, but almost always, this should be separated out.

We know we have a blockchain datastructrue underneath, no matter what.

A better git service is one that runs on backblaze b2.  Or even using ipfs to store the git data, in git format.  Use a professional ipfs gateway service to guarantee latency and uptime.

IPFS as the custom data structure would work fine, and would be instantly NFT able too.