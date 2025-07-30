
>[!tip] Created: [2025-07-30 Wed 13:44]

>[!question] Targets: 

>[!danger] Depends: 

if we mimick the fs, or the keyspace of the blob store in lmdb, then everything is fast and efficient, from pack files to loose objects.

it is crash consistent at all times.

lmdb has an encryption key that it can use.

even tho we could use git directly on the filesystem, lmbd is better because:
- disk usage is constrained
- we need crash consistency as migration in fly involves disk snapshots
- as a server we have multiple repos being read from at once
- we need in ram caching
- we need strong versioning of files, which might work with file locks but seems flaky
- we need disk encryption, which lmdb provides

If we follow this path, it would work

having no transactions except a single version conditional write is liberating, as transactions are something we manage internally.  Abstraction layers that do the same thing waste energy and complicate without gains.  Each abstraction layer should do a single thing.

We can set the volume to be not encrypted, since we can encrypt ourselves.

so each machine now has this volume, and if it spins up from a request that it doesn't support, it uses fly replay to pass it on.

Or we make a layer in front, that routes to the right machines, based on which ones are booted, which ones are near, or can provide directory information, like how to contact all the nodes of a cluster that serve the same repo.

fly-force-instance-id to make sessions sticky.
a browser has a particular valet / concierge machine.
Or once we have found our server, we take note of its id, so that requests get routed straight to it.

what if we had a single machine for every user ? this is their own solitary machine, and holds all their repos.

? how would shared repos work ? make a set of machines, one per repo ?
what about a single machine for each repo ? like a tiny little machine ?
this is the execution environment and everything.
but vols have to be 1gb, so that makes it wasteful.

users should have a dedicated machine that acts as them, but on server side.
this self server should always be close to them, should follow them around, should persist their connections.  
then the data servers are private, and they handle all the storage and git operations.
this app of the users is what they reconnect to, so they have something permanent, with session storage, that can do streaming video etc.

one app per customer, with a management app that knows everyone.  the data storage is a private network of machines, only accessible from apps.  The apps can scale up and down based on user needs.  users get billed based on app usage.  they can then host and do anything else on their app, which can hold arbitrary machines.  can isolate the networks per app.  means their vms can run rogue or they break our containment, and other users are not accepted.

could let users spec their own dns.
they could set up their own org and migrate to it.

they can have this dedicated machine that runs up any napp or code they want to run, so it works even in a browser.  Billing goes straight to them, and they can interogate the usage in fly directly using a scoped version of the mcp server.
