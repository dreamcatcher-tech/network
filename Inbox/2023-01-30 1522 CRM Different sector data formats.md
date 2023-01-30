
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