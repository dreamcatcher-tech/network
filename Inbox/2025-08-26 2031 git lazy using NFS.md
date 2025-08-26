
>[!tip] Created: [2025-08-26 Tue 20:31]

>[!question] Targets: 

>[!danger] Depends: 

basically project a network based filesystem that the agents can look into, and we make it be super lazy and only give it files on demand.  Stays using artifacts lmdb to fetch objects with writes happening in that single writer.

Artifact NFS.

Makes checkout instant.

means we can backend any service that uses the disk.