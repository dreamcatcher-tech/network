
>[!tip] Created: [2025-03-22 Sat 10:56]

>[!question] Targets: 

>[!danger] Depends: 

We need to write a definitive object that represents the repo state, otherwise, we can't watch for events across all branches.

Being able to know when a new branch has been created requires something that represents the repo state or stage ?

So do we need the dedicated meta branch of the repo ?
This branch should be renamable to anything, to avoid conflicts.

Could start with a single object that holds the definitive list of branches, possibly with the full config too ? or at least a pointed to the config.

Then we just poll that one thing for changes in the repo.

For the start, we don't need this event stream

Could write event objects, with a name that represents their sequence, and then just error if they stream in too frequently.

But, we can do queries, so might be able to do a query on all the keys in the repo ?
Could query for key names, and modified date, so any changes beyond a certain date would be returned.

Or if using event objects, can just watch for anything newer than a certain date ? the date of the last observed event, to avoid overlap ?