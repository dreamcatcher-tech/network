
>[!tip] Created: [2023-12-07 Thu 11:16]

>[!question] Targets: 

>[!danger] Depends: 

In a system with many async calls, or with many api calls inside those async calls, we should be able to take a snapshot which will use the stored results after the first run.

Means we can just turn on snapshotting, and then after the first round, the output will be very fast.  Can optionally remove or bypass those snapshots in CI using an envvar, since we might want to make the requests authentically there.