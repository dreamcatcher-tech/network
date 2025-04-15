
>[!tip] Created: [2025-04-16 Wed 10:29]

>[!question] Targets: 

>[!danger] Depends: 

If we present a large data object, then we can just pass this whole object around, and keep it synced ?

The customer list just comes down as a jumbled array of metadata objects.

Watch for changes to the head, and then go round syncing up the different parts.

Keep the customer list in sync by adding a watch to that path.

? how can we surface last modified ?  Could store the prior commit with all data objects, so can know when they changed last ?  Otherwise its a serverside walk.

Then, due to the search requirement, we start pulling down all customer records in full, so we can run a browser side search over the customer records.