
>[!tip] Created: [2024-01-30 Tue 17:45]

>[!question] Targets: 

>[!danger] Depends: 

Github is the bottleneck.  We would make something with webhooks so that we were kept abreast of changes, but we would also make an S3 style github front, that stores repos as s3 objects, deleting the old one each time.  There might be a filesystem that can deal with a compressed blob and fetch ranges based on some index file that it pulls down.

In this way, we can operate at the next level of scale.

After that, we would want a pure ipfs style object store, with permissions being on chain, rather than external, so strangely, having our own identity service seems to match with writing our own hosts, which might be p2p.