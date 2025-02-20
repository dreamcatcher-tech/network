
>[!tip] Created: [2025-02-21 Fri 10:33]

>[!question] Targets: 

>[!danger] Depends: 

Use the ram cache to store the full data, and use broadcast channels to broadcast an update.

Each time, we allow a dedicate query to a region where the partial data is stored in the cache.  The query includes some sectioning so we don't download the full thing every time.

The other way is to use something like fly.io as the target for requests to come in on, so the user subscribes to their listener container, and then the streaming all hammers this one container.

Another way is to set a streaming target and flag in the db, and only if the job matches this streaming target, will the stream be pushed out.

This relay service could be quite useful, since it acts like a telephone services.