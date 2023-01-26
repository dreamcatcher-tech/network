
>[!tip] Created: [2023-01-25 Wed 12:45]

>[!question] Targets: 

>[!danger] Depends: 

The danger is having the tree inconsistent if the datum records something that is ultimately out of date.

## Options
1. Customers collection update sends
2. routing/sector/order only includes those items that have been approved by a human
3. 3rd structure, that is the LUT for quick lookups both ways
4. Routing status that shows if routing is currently up to date with the customers collection
5. Sector membership is a derived property in each customer
6. Customer reducer will not complete until it has updated the sector arrays with its membership
7. Customer reducer sends a notification to the sectors collection to update with the customer changes
8. hardlink that is kept updated in sectors, that triggers every time a new customer parent forms
9. Require the application user to trigger an update when it can see a recompute is needed

## Customer Status
The status of each customer needs to be stored in the customer itself ?
It can be checked against the current routing collection to see if it is still up to date.
If a customer sector membership is changed by sector geometry change, then a human needs to check it before it will get routed.

## Unpublished manifests
When the manifest is not yet locked to a specific instance of the customers and routing collections, then it needs to be calculated on the fly.  If this was a transient, then this is easy to remount it whne changes are detected.

## Triggers
### Sector changes
Should cause a complete recalculation where a polygon map is built, then all the customers are walked, then order is updated.  Can be optimized by looking at what is already present.

### Customer changes
When a customer gps location is updated, 

### Simultaneous triggers
If a sector and a customer change at the same time, trouble may occur.
If the customers collection always told the sectors collection to recheck itself, and the sectors collection did its own rechecking on geometry change, then this should be sufficient ?

If routing received a signal from root that customers had changed, then

This api action in routing means 

## Manual Recompute
If the gui has a button to recalculate sectors, rather than it be automatic, this might be a good interim fix.  The app could detect when it was out of date, and could offer the button to perform a recalc if required.

Without this, need to hook when updates occur, so we can optionally process them in reducers.

## Recording human approval
This should be done within each individual customer, and would store a static view of the sector membership.  If the parameters of the sector change, then we need to raise a flag to indicate inspection is required.  This requires presenting a virtual view.

### Change to sectors requiring approval
If the sectors are redrawn, then a customer might end up changing sectors.  When approval was given to a customer as being set up correctly, we should bake in what sector they are part of.

If this changes, then we can know this ahead of time when presenting.

Telling the customers collection to write down the sector memberships of all might be feasible too.  But can avoid this heavy operation by computing on the fly.  So approvals are one at a time, manual, and we detect when they are different using a selector.

## Hardlink between customers and routing
On install, this action should be set up so we try to make the connection.  The connection must be mutual, so that changes to customers are propogated back.
The link may be rejected if we set up in isolated testing.
If subscriptions was a state field in the schema, then we could actively send out the updates when they occured.  These would only be sent out on change.

So would need a hook to know when children had updated.