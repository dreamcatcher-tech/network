
>[!tip] Created: [2025-05-21 Wed 14:15]

>[!question] Targets: 

>[!danger] Depends: 

if we cut the net, and do checks for page load with no denied requests and no console errors, then we can say that the frame passes the offline test.

This becomes pretty trivial if we load the items off of an Artifact translude anyway. Because Artifact guarantees the hash of all items is correct, and then we should block network access for everything else so we can be assured that it came in loaded from a secure source. Average itself could load random items but they would just be loading it off of Artifact using hash-based commit-based addressing and retrieval. 