Routing is setting the order of the customers in their respective [[Sectors]], while accounting for new additions, removals, geometry changes, location changes.  Orphaned locations must be considered part of a special sector which has null geometry.

## Triggering changes
The parent at `app/routing` listens to changes in the customer list, and if any of the changes are in gps location, then it

## Routing reacting to changes
### Geometry changes
Whenever the polygons change, the routing changes.  Locations are removed from some sectors and added to others, or possibly orphaned.


### Location changes
When a customer moves location, this will put them in a new sector.  The new sector needs to be aware of this and the user should be notified than an unrouted customer is now in this sector, and requires attention.

## Customers reacting to changes
If a customers sector has changed as a result of polygon changes, this neds to be handled by a human, since their service days may have changed.  Customers should have a checkbox indicating they have been contacted about the change.

## Implementation
### Store in children
Create a child for each sector, which might be the actual children.
In the state of each child, store a list of customer ids that.

Keep two arrays in each child, `routed` and `unrouted` 