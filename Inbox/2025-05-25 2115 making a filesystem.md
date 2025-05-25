
>[!tip] Created: [2025-05-25 Sun 21:15]

>[!question] Targets: 

>[!danger] Depends: 

to run some apps, we would need a genuine filesystem to be mocked.

https://github.com/tigrisdata/tigrisfs

we intercept the reads, and fulfill them using artifact, then we buffer the writes and commit them when ready.