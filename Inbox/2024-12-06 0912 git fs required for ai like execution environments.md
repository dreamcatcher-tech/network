
>[!tip] Created: [2024-12-06 Fri 09:12]

>[!question] Targets: 

>[!danger] Depends: 

Just like all ai's need a sandbox execution environment, they also need a db that permits very light weight forking (aka sandboxing) and merging, and undo.

Current dbs are not designed in this way.

The git model gives us rapid rollback, and treats forking and rollback as normal operations.

Does not require restoring from backup, since the history is present in the current operation - this is the key difference.  To restore versions in a db, since it is a single large piece, it needs to either be built in to the data structure, or

Also merging is devilishly complex, so it is almost certainly more economincal to use the tried and true and well understood model of git, than a custom db implementation.

Git is very minimal, and runs very fast when optimized.  Also very compatible with all other tools - so the crm or your chats that can be exported out, giving you data control.

Also easy to read the latest version since it is presented on your filesystem.

Can allow object level permissions, where a certain person is allowed to access a certain file, but only during a certain series of commits, since the permissions are stored with the file and can change by way of a commit.

Filesystem sandbox required.