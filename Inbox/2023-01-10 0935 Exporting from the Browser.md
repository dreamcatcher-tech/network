
>[!tip] Created: [2023-01-10 Tue 09:35]

>[!question] Targets: 

>[!danger] Depends: 

Having the full app present in the browser allows a definitive backup to be taken without requiring the server to do anything, nor anyone to log in to the server and do this.  These files can be saved on the browser machine, in the cache, or pushed to a cloud service.

Should be able to restore and fork from the browser, pushing into the server host, so alternate views can be experienced.  The server can then signal to other running versions that a new master chainId is to be used, so all the clients can switch over.

A separate service can be connected that simply views the system and takes a backup, relieving the primary servers responsible for change of the system from the burden of backup.

These backups can be inserted back in live, as they can be used as sync sources for the swarm, and for the next backups to be truly differential.