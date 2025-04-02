
>[!tip] Created: [2025-04-02 Wed 14:17]

>[!question] Targets: 

>[!danger] Depends: 

an Artifact could be used to:

1. Send in new torrents
2. Do searches for torrents
3. Do deduplication searches
4. Re-encode
5. Check for quality
6. Look for ads or deduplication
7. Read comments
8. Add votes
9. Add staked weight

The BitTorrent agent would be running on a service that had an exposed IP address. It would treat the chunks of the file as pieces that got written to a git folder with an artifact. 

since this is large binary unchanging data, we could store this as LFS-based chunk storage using a low-cost backend. 

This means that the torrent node needs to do nothing more than maintain connections with peers. These connections may be stored with an artifact to be able to understand more about the behaviors and health of the torrents as well as to provide some attribution to peers who are sharing them. 

The LFS server can treat each chunk as a distinct thing, but it can also 

Use other computers as storage to back artifact.  Set intelligent balancing goals using an AI to follow rules about where to store things and how to manage the state of the disks.