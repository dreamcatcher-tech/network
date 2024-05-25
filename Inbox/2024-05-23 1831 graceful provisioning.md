
>[!tip] Created: [2024-05-23 Thu 18:31]

>[!question] Targets: 

>[!danger] Depends: 

So at boot, we have a special case where we want to wait for the home address to be created.

If the repoId of home was consistent, and generated from the superuser, would this help ?

If the provisioning fails, we should be able to detect this remotely - it is more damaging to have multiple isolates trying to do this install.

? how can we reset the home address so it can change while running ?
Always read it from the database every time it is requested ?
Set an env var so that if it matches the current home repoid, we will drop the db cleanly, then reprovision.

Otherwise, effects should be grabbed instantly, since we might be the recovery, so last to run is always assumed to be the safety, and anyone else should abort.

? Should the clients hook the home address and get told when a change occured ?
But home address should never change, really ?
? what if home address was long term stable all the time ?

A unified splice stream could be made by re-requesting each time you want to add something, so that only a single isolate is used for a large number of splice watches.

?? use middleware to pause requests until the db is unlocked
await an `.isProvisioned()` check before allowing the middleware to pass thru

Call start and stash the promise, then have middleway that pauses until the start has completed.
In this way, we might not need to hit the queue possibly.
Another queue subsystem should be avoided if possible.

Problem is that the first isolate has died by the time the actor install completes.
? Might be different if done during a request ?
So appears the initial smoke test is simply to turn it on, and the most we could hope for is a queue action that we fired off - that inital action seems to get stopped for different reasons.
So the locking should only be done by the queue processing action - the server is just a normal checker to await home initialization

Sequence
First boot locks the db
bounces any requests until the 