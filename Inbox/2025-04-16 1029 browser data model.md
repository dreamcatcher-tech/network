
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

take the ls in arrays, store them in a big map that is available via context, rather than passed as props, since this will always represent the latest version of the list.
Or, just use a big object ?
Or, use maps as directories, which hold files ?
flag some paths as full sync, and others as lazy.
Might store the files in localStorage of opfs ?

If the opfs was the thing that was kept in sync, that might work better ?
git commands are just keeping this thing in sync ?
Then the access patterns become not so much our problem.
But the issue is that now we are maintaining two things ? 
Would be easiest to just maintain a single thing ?
It is not as easily versioned ?
we could use actual git here, and then just read off that ? with the fs being pullthru ?

Do they even need this part, and could they just do with a clunky syncer ? a stinksync ?

