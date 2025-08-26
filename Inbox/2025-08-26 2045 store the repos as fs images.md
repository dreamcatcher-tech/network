
>[!tip] Created: [2025-08-26 Tue 20:45]

>[!question] Targets: 

>[!danger] Depends: 

so each thing is just a full binary image of what the git folder looks like.

over lmdb this is ultra quick - we just peel off the whole object store and dump it straight to the image.

that gets dropped down as the base of the docker image.

best is to do this lazily, but not relying on the network is great.

then that image sticks around for next time.

we could handle the checked out view as a docker image to make it ultra fast next time.
periodically squish down the images.

be cool if the docker fs layers could be lazy loaded too, rather than needing to fully be present.