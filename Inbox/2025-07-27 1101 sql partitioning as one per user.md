
>[!tip] Created: [2025-07-27 Sun 11:01]

>[!question] Targets: 

>[!danger] Depends: 

altho sql disklikes one database per user, we could emulate this by adding a user id to every table, effectively particitioning the contents by that user id.

So that it can be extracted from, and can be stored as, a single db. 

The base user table would be marked for status, and then all the talbes purged.

we could also avoid having to do a whole commit for each tiny change to the db, and instead we could periodically sync with a single commit, which might cause things like purging the deletes table, or the overwrites table - basically any time new info comes in, and has conequqneces, we need the original so we can replay the system.

sql table relationships cannot be avoided - they are a natural part of working with data models.

There might be others for nosql dbs that have similar gains for us. 