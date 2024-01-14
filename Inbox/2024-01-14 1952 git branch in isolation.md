
>[!tip] Created: [2024-01-14 Sun 19:52]

>[!question] Targets: 

>[!danger] Depends: 

Simulates what is happening on other peoples machines when they branch, as they are doing so in complete isolation.

So we could use the refs/heads to actually track all the different layers we have in the filesystem.

We should do everything in ram, and signal the levels of flush that have occurred - it might be possible to network transmit off machine before the disk write has concluded.

Tag seems like a commit that doesn't change any hashes.  We could use tags as signatures.  These can have gpg signatures attached.

Really need a viewer of the fs at each stage in a commit.