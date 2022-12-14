
>[!tip] Created: [2022-12-14 Wed 15:47]

>[!question] Targets: 

>[!danger] Depends: 

It may not be possible to route all UI interaction thru a blockchain action, as this might cause unnecessary overhead for devs, much like a redux type of overhead.

Instead, all actions can be recorded from the dom.  on* can be recorded, drags and clicks, window sizes - this can then be replayed back.  Can affirm we are playing right 

Worst case should be able to capture the screen and stream it into the chain.  Or capture the dom and stream that in.

Reset each time a true blockchain action is received.

This should be able to be streamed out live for interactive debugging.

Multiple operators should be available too.

Allowing multiple operators with different page layouts should be possible as well.