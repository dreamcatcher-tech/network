
>[!tip] Created: [2023-11-06 Mon 10:03]

>[!question] Targets: 

>[!danger] Depends: 

We could do things like banking processing immediately, where the balances could be updated using HAL.

The browser would drive the updates one at a time, so that the user could stop anything by just closing the window.

Store the csv on file and compare each time, so we know we aren't doing duplicate updates.

If we could write to the database, then we can deliver features faster than cutting over to our system entirely.

Also a full pull seems very easy to do now, taking under a minute, so we could resync at the start of each day, and mark ourselves against the incoming data, then merge it in once we had scored ourselves.