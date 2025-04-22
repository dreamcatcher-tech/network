
>[!tip] Created: [2025-04-22 Tue 16:51]

>[!question] Targets: 

>[!danger] Depends: 

Publish a suite of tests that can exercise the system under varying degrees of load, from precise individual unit one-off tests to heavy load as well as load from multiple coordinated regions. The idea is that you should be able to provide any S3 compatible backend or anything that supplies even the interface that we need, so it could be Postgres or anything else. You would be able to operate the data layer of Artifact with atomic guarantees, this means that we can present ourselves as a bottomless storage that's very fast and how to arbitrary sized objects small large. 