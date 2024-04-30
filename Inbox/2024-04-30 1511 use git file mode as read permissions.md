
>[!tip] Created: [2024-04-30 Tue 15:11]

>[!question] Targets: 

>[!danger] Depends: 

rwx and owner, group, everybody is a great starting point for read permissions in our system.

Git stores these values, and so when a remote read request comes in, we can read these permissions to determine how to response to it.

Group might mean sibling branches.