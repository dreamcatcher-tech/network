
>[!tip] Created: [2024-01-31 Wed 13:19]

>[!question] Targets: 

>[!danger] Depends: 

The kv can be used to model indexeddb, and so we can have multiple versions of the git folder direct in the database, and instantly available.

If our version was just another fork of git, then we should have no problem pushing back to github, even if there were changes.

Periodically, we would check if there were changes on github.

Seems best if we take a snap of github, and then
It should be a dedicated action to trigger a pull from github.
Ideally, webhooks would trigger a pull.

Quick n dirty is to take whole snapshots of memfs, and use that as canon.