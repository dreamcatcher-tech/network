
>[!tip] Created: [2024-12-04 Wed 12:05]

>[!question] Targets: 

>[!danger] Depends: 

How artifact is called should be independent of how the host operates.
The host is like a way of running artifact napps locally, then storing the results on the remove instance of artifact.

Hosts are the things that do the users bidding.  We could just make the front end be able to run the napps directly.  the front end napps should typically be single ai calls, and not attempting to do parallel calls - they are the presentation / entry point napps.

host napps are napps that have access to host resources, like the chats of the user, remote context logins, etc.

Whilst we could run it as a postgres db, for the sake of easy import export, and for future portability, making it run on artifact seems best ?
Also to be able to reference the chats as a thing seems easier in artifact, since can be referenced by hash / path.

Just seems like the import of moneyworks is incredibly simple ?