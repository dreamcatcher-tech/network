
>[!tip] Created: [2025-02-04 Tue 15:36]

>[!question] Targets: 

>[!danger] Depends: 

If we write some logic that the large files get stored in the git repo as torrent files, and we have some way of piecing the torrent chunks together again, by storing in the git object store as blobs, then we can pull in all the pieces of the torrent.

We could also turn the torrent into a git tree, and store each piece ultimately as a blob there.

Then we have software that presents back the full file as a virtualized presentation.