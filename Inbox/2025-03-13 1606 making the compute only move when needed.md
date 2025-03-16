
>[!tip] Created: [2025-03-13 Thu 16:06]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to deploy to a single region, then when requests from other regions, the compute moves there as required, like a cache.

The snapshots of the data are able to move, so the first request is served from the existing region, but then once the machine image has been transported to the other region, then it can take over the quorum.

So its like Tigris data model, but for compute.  Auto scale, globally intelligently moved.