
>[!tip] Created: [2024-04-05 Fri 08:38]

>[!question] Targets: 

>[!danger] Depends: 

If someone wants to download a git repo, like a browser sync, then we can do so using objects at a distance, rather than some network protocol.
We should always have a pack available for them to get, and we should make one if we don't yet have one.
We can make those objects available for download from B2 and in parallel, so the clients can pull as much as they can get.
They would get a header commit, and do a walk to pull down all the objects they don't already have.  The packs make sure the pulls are reasonably efficient.

Permits partial and resumable downloads, rather than needing the protocol to negotiate bits.

Lends well to decentralized versions using something similar to IPFS.

Lets people hook repos on github so they always have an automatic copy.