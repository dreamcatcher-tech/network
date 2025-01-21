
>[!tip] Created: [2025-01-07 Tue 13:42]

>[!question] Targets: 

>[!danger] Depends: 

Like spawn, if we want to send a range of commands in, and then have them execute only once the spawn is done, means we need some way to call execute ?

This might be done by having the item locked to a snapshot or not.  If not locked to a snapshot, then it needs to go get locked, but this shouldn't require a fresh execution, since it should happen only once.

Probably can just do it at runtime for now - if it is a far away remote, then the eagerness is important.

We could transport all the functions as json command objects, so they get executed regardless ?