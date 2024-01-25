
>[!tip] Created: [2024-01-23 Tue 09:47]

>[!question] Targets: 

>[!danger] Depends: 

Set the concurrency level, which should be accessible by isolates running within it.  Can choose to also set the ACL levels of different isolates, so can deny them ability to change some things like concurrency levels.

Should be able to model any kind of IPC with these tools.

Make a set of benchmarks that show performance in ram, with disk, across machine, and other types of branch shape where the topology is changed.

Show witnessing speeds, distribution speeds.

Overlay this with raw tcp ping, then internal libp2p ping, then finally internal artifact latency.

Show distribution scores where we want to pull a file and see how well a swarm performs.  The metric would be how well the load was balanced, vs a server system.  In an ideal scenarios, with peers doing the same things, new peers joining and leaving, the load should be low, plus the overall latency should be always adjusting to max theoretical.  Time to stabilize / reorg should be low too.  Can model this by randomly shuffling the link speeds between peers and seeing how they adapt.

Large files should be done using shared ipfs with permissions, where the git protocol holds the permissions for the files, and then each node checks if the incoming connection is allowed to access the files.  If so, then when the torrent like request comes in, if it can spare the bandwidth, it will give more pieces than what were asked for, since it can.

If we had a formula, where I could give a node the file I want, and the nodekeys of all my peers, and it could compute how to send me pieces fast, so that it didn't overlap with any pieces of the other peers.

I could give each peer an id key, which represents its identity relative to me, and it could compute what it should do, in a sequence, and I can also tell it the sequences that other peers stopped at so it can recover.  Then, add reliability scores to each peer so they can compute some redundancy for me.  Also add strategy, like faststart, where we get the front of the file first.