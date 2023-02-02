
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
Publish should mark that customer as having a pending service.  Reconciliation will close that out.  This marks that the customer was due on that date, and causes it to show up in furture queries, regardless of how the sectors and gps locations may change.  This would also lock the pdf template to the service, so it can be recreated at whim.

These queries might be slow if the number of active customers is large.  We could do these queries in multiple ways:
1. Write them to disk in /schedules/runDate and be sure to modify them whenever the customer is updated
2. yield the query in the UI, so the results dribble in without locking the UI
3. run the query in a webworker
4. Cache the query so it is only slow once, and then gets patched during the user session
5. Run the query in the main UI thread and see how we go.

### Manifest display
If a runDate child exists, then we have a published schedule for the day.
Within this, each sector has its own manifest with its own publication dates.
The runDate child might be auto created if any manifest is published.

Each manifest is used as a search string for customers that match its params.  Searching gets the sector, which is frozen based on the approot, then it goes thru every customer in the order list.  If the customer is due a collection, it is included in the list.  If the customer is added in the manifest as a special case, it is included too.  All customers in the order are searched for the presence of a transaction for the runDate - if found, they are included in the list too.

Basically if no reconciliation has occured, then a customer is included 

If a customer is reconciled, but is not in the sector, then it needs to be added as a special case to the manifest.


But since we already have the sector memberships, pure search is less complicated, if it is performant enough.

Edge case is to search all customers and look for any collections made on a specific day.

Allow the addition of adhoc customers not on the particular day.

### Holidays
We need to be able to pick up the whole manifest and move it to another day.
On the donor runDate, set a flag that moves it to another day - a child named `movedTo` that points to its destination perhaps.
In the recipient runDate, the moved sector is displayed for that day.
Merging is marked as special case modifications in both donor and recipient.

## V4 storing gps in the sectors
If the gps location was not in the customer, but was stored in the sector, then changes become obvious.  This might be used by storing the location in both places, so that sectors can be redrawn rapidly without address info, and so that changes in gps can be detected.