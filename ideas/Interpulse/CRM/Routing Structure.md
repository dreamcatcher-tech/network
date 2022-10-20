Setting the order of the customers in their respective [[Sectors]], while accounting for new additions, removals, geometry changes, location changes.

## Changes
### Geometry changes
Whenever the


### Location changes
When a customer moves location, this will put them in a new sector.  The new sector needs to be aware of this and the user should be notified than an unrouted customer is now in this sector, and requires attention.

## Implementation
### Store in children
Create a child for each sector, which might be the actual children.
In the state of each child, store a list of customer ids that