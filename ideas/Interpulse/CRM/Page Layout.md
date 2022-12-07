## Multiple accordions

## Fully scroll the main page

## Customers list is never an accordion
Accordions can set their max size by %vh

Callback to tell the top level stack to grow to full height

Put each accordion in its own box with its own overflows - turn overflow off if not expanded, once transition has completed.

Make a filler at the bottom of the max stack that passed thru pointer events.

make a 100vh div, then use a hook to measure what the size of the parent is, then supply this to the function that sets the height

Measure the height of the whole left column, then calculate the height of each child to work out space remaining.

Make the stack be max height, then wrap each child to turn on pointer events.  Could wrap each in a Box and hook the size of the element, which can then feed in to any children.

Build our own Accordion, flick the stack to max, transition in the body of the sorter, then transition out again.

## Problems
1. Accordions need to 'discover' their size nad squash other panels
2. Virtual lists need to be told what their size is
3. Sometimes the virtual list reaches its maximum size, in which case it should not push the accordion to grow any more

## Conclusions
1. Cannot get the Stack container to grow any more than it is asking for, so child components cannot make it get larger just by setting flexGrow
2. Because overflow in AccordionDetails seems impossible, go with a static panel with scroll managed by react-virtualized component.
3. Accordions must have a minHeight set to prevent overflow occuring when collapsed.  They cannot have overflow turned off until they have settled

## Hoisting editing in Routing
If Sector and Sorter can both do editing and submission, then how can order updates be passed on to the map ?

control the saving inside each component but send edits up to be relayed down to the map

make map be a child of sorter so the props go down

have sorter call up to a function for its props which are then passed down to the map

pass down ONLY the edited order, and overlay this on the map in a separate pass.  Benefit is that it is very explicit what changes have been made, very easy to undo.  Allows both panels to operate independently.  Quick to implement.

Unify the save logic for both panels as pass down props.  Downside is now the routing component is much smarter than it should be.
