
>[!tip] Created: [2025-05-27 Tue 15:39]

>[!question] Targets: 

>[!danger] Depends: 

they can be the actual object, or they could be a pointer to something.

pointer is dangerous since that can become stale.

hauling in a whole other repo might be excessive ? especially if we want it to stay intact and have all its history.  But it would just be objects in our object store, which would deduplicate.

it means nothing to have a pointer - you should always demand access to the full objects.