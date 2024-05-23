
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