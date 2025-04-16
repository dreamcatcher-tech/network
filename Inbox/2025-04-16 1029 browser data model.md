
>[!tip] Created: [2025-04-16 Wed 10:29]

>[!question] Targets: 

>[!danger] Depends: 

If we present a large data object, then we can just pass this whole object around, and keep it synced ?

The customer list just comes down as a jumbled array of metadata objects.

Watch for changes to the head, and then go round syncing up the different parts.

Keep the customer list in sync by adding a watch to that path.

? how can we surface last modified ?  Could store the prior commit with all data objects, so can know when they changed last ?  Otherwise its a serverside walk.

Then, due to the search requirement, we start pulling down all customer records in full, so we can run a browser side search over the customer records.

First job is to pull down the customer metadata, and keep that in sync efficiently.
Pull down all the customers gradually, gracefully.

Server centric is tempting, but is actually slower than direct search ?  Also very latency sensitive.

Server centric model:
ls is streaming
ls can handle a count param, so we know how many items exist
search is done server side using find() which is the start of the mango query language.
results stream back down using filename only, 


server side search should process those items with cache hits first, so we can give relevant results quickly, with the heavier, slower results coming in after.

ls should stream down and provide filenames ? 
or, just stream down arrays of meta items.