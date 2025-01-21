
>[!tip] Created: [2024-11-26 Tue 17:20]

>[!question] Targets: 

>[!danger] Depends: 

A napp could be asked to be run in a detached mode, where it isn't part of the persistence of artifact, and it runs directly on the edge isolate that it was called from.

Means that it can give streaming results straight back.

It could optionally opt to run a certain number of queue items locally too, rather than using the queue.

It could still be exactly the same as if it ran queue side.  

Basically just running the entry point action at the edge, with configurable shockwave parameters, where this edge isolate can opt to carry on running up to some number of queue requests.

Avoids the hassle of streaming from the queue side.

Then the napps functions are basically handled on the server side.