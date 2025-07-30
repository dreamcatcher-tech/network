
>[!tip] Created: [2025-07-30 Wed 13:31]

>[!question] Targets: 

>[!danger] Depends: 

why need to sync the whole git repo, why not just stream in whatever we have, as it comes down ?
so make the customer search be done server side ?

or stream down to client, and client searches whatever is on hand, in a custom data structure.

Just means that we pull data in somewhat lazily, rather than trying to make a general syncer, we define what we want to query.

we could front the repo with a sql query or with graphql, and just query freely, to make interfaces that were fast to make, rather than complicating them with offline ability, since you should have the server with you.

basically manipulate queries and views server side, and then the client is very thin ?