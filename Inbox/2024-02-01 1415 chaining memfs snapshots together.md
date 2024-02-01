
>[!tip] Created: [2024-02-01 Thu 14:15]

>[!question] Targets: 

>[!danger] Depends: 

No point incuring extra write overhead - if we just used a linkedlist, then we can point to the previous iteraction of the given repo.

Periodically we would squash them down, when all processing had been merged back in to master, so we can ditch all the previous snapshots except the handful we might want to read from.

Can recover from github if need be.

So the cloud is our machine, with a checked out repo.
Each time you check it out, it is billed against your account, even tho we might dedupe objects.