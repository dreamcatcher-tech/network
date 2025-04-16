
>[!tip] Created: [2025-04-16 Wed 14:35]

>[!question] Targets: 

>[!danger] Depends: 

Using s3 alone, we should be able to run artifact for cheap, large storage.

We might be able to use backblaze as well ? particularly if we used our own global quorum ?

So long as we are given a consistency source, we can operate.

We can provide an internal consistency source if you are running single thread or have another locking mechanism.

If you run in fly.io we can provide a nats stream that can do the consistency for you.