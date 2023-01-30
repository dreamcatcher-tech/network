
>[!tip] Created: [2023-01-30 Mon 15:22]

>[!question] Targets: 

>[!danger] Depends: 

Each time a manifest is generated, a complete copy of the sector is stored.  This is wasteful.

Manifest should store hardlink references to the sectors on this date, using the same name as used in routing, but to a specific pulseId.
Customers should be a hardlink at this date to a pulseId representing the customers.
Order on the day should be a derived property, given the sectors

Could sectors also be a derived property, so all that is stored is a hardlink to routing and customers ?

THEN display logic just receives two crisps - routing and customers, plus a runDate, then it works everything out from there.  For virtual manifests we just pass in the latest crisps.  For published manifests, we pass in the crisps from the hardlinks.

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