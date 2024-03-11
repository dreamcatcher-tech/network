
>[!tip] Created: [2024-03-12 Tue 11:50]

>[!question] Targets: 

>[!danger] Depends: 

Presumably existing isolates are shutdown once they become idle.
Test is to run some continuous load and add system fingerprint to the outcome metadata.

Each input action should have a format version id or something to ensure smooth upgrades.

The iojson should have a format stored in the file so the apps know how to load it up. 
Upon encountering an old version, we should upgrade the format first before doing anything else.  Everything else can probably just be left running.

Watching for anything more than client information is bad - clients should timeout or error then try again.  Core needs to keep going no matter what, so watching cannot be relied on for anything.

Lock watching appears the differences.
Locks should also check the version number of the deployment, and if there is a newer version, then should resent their message to be processed by a newer isolate.