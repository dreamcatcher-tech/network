
>[!tip] Created: [2024-03-29 Fri 14:11]

>[!question] Targets: 

>[!danger] Depends: 

So the only real danger is that the heads files are out os sync.

If we ensured this was stored using an atomic system, then the whole system can be atomic, with the only side effect being that we need to run garbage collection periodically.

Have a versionstamp of the git repo, and ensure that we updated the repo exactly as planned.

Basically git should be used as the concurrency control mechanism to ensure we are always consistent.

Basically just need something that takes advantage of the CAS nature of git.