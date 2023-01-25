
>[!tip] Created: [2023-01-25 Wed 12:45]

>[!question] Targets: 

>[!danger] Depends: 

## Options
1. Customers collection update sends
2. routing/sector/order only includes those items that have been approved by a human
3. 3rd structure, that is the LUT for quick lookups both ways
4. Routing status that shows if routing is currently up to date with the customers collection
5. Sector membership is a derived property in each customer
6. Customer reducer will not complete until it has updated the sector arrays with its membership
7. Customer reducer sends a notification to the sectors collection to update with the customer changes

## Customer Status
The status of each customer needs to be stored in the customer itself ?
It can be checked against the current routing collection to see if it is still up to date.
If a customer sector membership is changed by sector geometry change, then a human needs to check it before it will get routed.

## Unpublished manifests
When the manifest is not yet locked to a specific instance of the customers and routing collections, then it needs to be calculated on the fly.  If this was a transient, then this is easy to remount it whne changes are detected.