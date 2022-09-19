
# Dirty Backups

> [2022-09-12 Mon 21:30] <br/>
> Targets: [[Blogs]] <br/>
> Depends: [[]]

Because of the Copy on Write nature of all blockchain based systems, the backups required (if any) can be dirty.  
Each write to the database is a new file / new entry, keyed by hash, so there is no danger of a write hole occuring.
Order jumbling of writes to disk is easily recovered from by walking back until we have the last full view of the state tree.
Any errors in the disk can be recovered by asking the peers for their copies of the content.

For example, we can use OneDrive as the backup mechanism for the database.  Typically for a SQL server this would be ill advised, as the SQL server needs to quiesce before backups are performed.
For blockchain systems, this is superfluous as we can recover from any amount of information at all.
