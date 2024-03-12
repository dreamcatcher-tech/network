
>[!tip] Created: [2024-03-13 Wed 10:54]

>[!question] Targets: 

>[!danger] Depends: 

We can make artifact look like an unlimited amount of storage.
By attaching to git lfs style objects, we can store in ipfs or s3 style storage.

IPFS ideal since we can deduplicate things by storing a reference count for each object.

Transcoding using deno should be entirely feasible, and allow massively parallel operations.

Could set up aws lambda workers to do special heavy jobs with higher cpu demands and longer runtimes.

Pick a chunk size that is efficient for breaking up ipfs chunks.
Store each ipfs block into s3, and provide means of reconstitution.