
>[!tip] Created: [2023-01-30 Mon 15:22]

>[!question] Targets: 

>[!danger] Depends: 

Each time a manifest is generated, a complete copy of the sector is stored.  This is wasteful.

Manifest should store hardlink references to the sectors on this date, using the same name as used in routing, but to a specific pulseId.
Customers should be a hardlink at this date to a pulseId representing the customers.
Order on the day should be a derived property, given the sectors

Could sectors also be a derived property, so all that is stored is a hardlink to routing and customers ?

THEN display logic just receives two crisps - routing and customers, plus a runDate, then it works everything out from there.  For virtual manifests we just pass in the latest crisps.  For published manifests, we pass in the crisps from the hardlinks.

Customer has said the sectors are not going to change during the test phase.

## Checking consistency
We can make the consistency check be done browser side and have a progress bar for performing it.  This can be done before publishing a manifest, so we can avoid having to do it live. 

This would highlight all customers that have some discripancy based on what was last approved.
Publishing might be banned until all customers have been checked off.

## Continual Reconciliation
Once tablets are active, we will need to allow finalizing on a per customer basis.
Should the status of the service be stored in the customer record directly, rather than separately ?
This makes manifests more an accumulation view, rather than a storage point.
Transactions would be children of the customer record then, with "Next" being a computed value, and all reconciled and published collections being stored by runDate against the customer.
This offers a good way to import a customers transaction history from moneyworks too.

## V1
To reconcile a manifest, we look up the scheduled pickups based on the computation from the snapshots, and display those customers in rows.
If nothing recorded, we assume no reconciliation has occured.
When reconcile is triggered, the customer record is updated.
Search for any customers that were finalized prior by walking their transaction history.

## V2 full virtual
If we did not store the manifest at all, but simply recreated it from the customers ?
Only on reconciliation is a manifest created, to store the hardlinks of the customers at that point in time.  
There seems no point to snapshot the customers, if we had tablets.
Tablets would acknowledge if they received a customer update in time.

## V3 storing unordered customers separately
In each sector, store a list of customers that we know we have not had approved separately, and only move them when a human reorders them.
Avoids storing anything in the customer record other than the pickup frequency multiple and the gps location.
Publish rejects if unordered customers that would be scheduled on a particular day.
Refresh of sectors can be done to recheck the sectors against all the customers.  Would check against the last stored version of the customers chain that it did a rebuild against.

### Customer gps change
When an individual customer is changed, then we update them in the sectors at the point of save. `UPDATE_GPS` is sent to Routing collection with the custNo.  This avoids the need to watch for updates in the customers collection itself.  This will recheck which sector this gps belongs to, see if it is already included, place itself in the unordered list since the gps has moved.  If not included, will remove itself from all other sectors, add itself to the top of the ordered list, and the bottom of the unordered list.  If no sector, added to the unassigned sector.

At edit time, if moving the location would alter the service, must cancel the service first, then can move the customer.  Customers with an assigned service MUST have a gps.

Two types of error exist in the system - routing error where the location must be routed correctly, and service error where the customer must have its service configuration reviewed.

### Sectors redrawn
Changing a sector will cause the whole collection to recompute.  Existing locations are not moved to unordered.  Might detect changes if the sector order size changes, then we mark everything as unordered.  Might just always recalculate everything.  Defer this until after deployment.

### Rundate changes
When a sector run date changes, then affected customers are put in the unsorted list.
They stay in the sorted list, but are also added to the unsorted list.
Unapproved and not in the ordered list immediately goes to the top.
Each customer is verified for correctness by looking it up in the sector, checking if it is in the unordered list, displaying a virtual data point if so.  Pass down as virtual props into the datum.
Each sector, when it has a service assigned to it, takes a snapshot of the sector that it is included in.  If this changes, then in the customer list, these customers show up as an error.  

### Initial computation
Trigger `REBUILD` to walk all the customers, and find their locations again.  This method will not detect customers with a changed gps location, unless we store reference to the customer collection pulseId that we are complete for.  Customers should not be able to alter their gps without the sector being updated about it.

Walks the whole customer list, and runs the same action as `UPDATE_GPS` for each one.  If the sector is being moved, will be marked as unordered.  Else it will be left as ordered.  Full version will check against the last known pulseId of the customer to see if the gps altered.

### Historical views
If the [[approot]] is stored in each chain, then we do not need to store snapshots of the customers or sectors tables.  We can look this up at the point of reconconciliation.  

### Schedules Generation
Search thru all customers and see if they have a transaction on the given runDate.
A customer has a pending service if they have an active subscription for the runDate and they are in a sector for that runDate.
Publish of any customer, including "publish all" creates a `/app/schedules/[runDate]/[sector]` child, and writes each published customer as having a pending service.  Reconciliation will close that out.  Unpublishing will delete it, and the last unpublish for a day will also delete the runDate child.

Marking the customer causes it to show up in furture queries, regardless of how the sectors and gps locations may change.  This would also lock the pdf template to the service, so it can be recreated at whim.  This makes the portal show up with the status of each customer without leaking informaiton about other customers.

These queries might be slow if the number of active customers is large.  We could do these queries in multiple ways:
1. Write them to disk in /schedules/runDate and be sure to modify them whenever the customer is updated
2. yield the query in the UI, so the results dribble in without locking the UI
3. run the query in a webworker
4. Cache the query so it is only slow once, and then gets patched during the user session
5. Run the query in the main UI thread and see how we go.

### Manifest display
If a runDate child exists, then we have a published schedule for at least one customer on that day.
Within this, each sector has its own manifest with its own publication dates.

Each manifest is used as a search string for customers that match its params.  The parameters are `/app/schedule/[runDate]/[sectorId]`  Searching gets the sector from the `[sectorId]`, which is frozen based on the approot, then it goes thru every customer in the order list.  If the customer is due a collection, it is included in the list.  If the customer is added in the manifest as a special case, it is included too.  All customers in the order are searched for the presence of a transaction for the runDate - if found, they are included in the list too.

A customer can be in one of 3 states:
1. pending - they are in the sector order list, or in the additions list for the runDate, but the customer has not been marked as being part of a schedule - they are included in a search, but have not yet been altered in any way
2. scheduled - they have been marked as being scheduled for collection and an invoice has been generated or can be generated, as well as the sectors and customer record at that point in time can be retrieved.
3. completed - collection has been reconciled, and either completed or did not complete for a given reason.

The customer transaction is recorded as a single object, which has a two way reference to `/app/schedule/[runDate]/[sectorId]` which allows it to be looked up from either direction.

### Holidays
We need to be able to pick up the whole manifest and move it to another day.
On the donor runDate, set a flag that moves it to another day - a child named `movedTo` that points to its destination perhaps.
In the recipient runDate, the moved sector is displayed for that day.
Merging is marked as special case modifications in both donor and recipient.  May label this novation.

## V4 storing gps in the sectors
If the gps location was not in the customer, but was stored in the sector, then changes become obvious.  This might be used by storing the location in both places, so that sectors can be redrawn rapidly without address info, and so that changes in gps can be detected.

## V5 running active error check
Instead of maintaining correctness, ask the users to run the check manually each time they want to know if the system is consistent.

### Notes
Schedule object could be entirely virtual, by pushing a hardlink to the routing object only.  Then sectors are always calculated on the fly.

1. create a schedule for a runDate
	1. filter the sectors by those that occur on this runDate
	2. Make a wrapper manifest object for each one, as a child of the schedule
	3. Filter the order by customers due on this day, pushing down the computation into the manifest object as its init action, or next action, to give progressive results, possibly with blockbreaking based on elapsed time
	4. Delete the other useless data
	5. Keep a hardlink to the original sector (or just use approot)
2. Use the manifest obect to interact with customers directly
	1. Mark the customers as scheduled, so they are definitely included in a collection schedule
	2. Mark customers as completed, so they are billed and emailed
3. Use the manifest object to store modifications
	1. When holidays occur, 2 way link to the other runDate
	2. Add casual collections
	3. Remove collections for any reason
	4. Move collections to other sectors