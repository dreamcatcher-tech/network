
>[!tip] Created: [2024-01-21 Sun 13:14]

>[!question] Targets: 

>[!danger] Depends: 

If running in the stuckloop, we should be conversing with the user as the stuckloop until we think they want to exit.  We should leave it up to the stuckloop bot to detect when they want to exit.

We could make it an independent bots job to do this.

But being able to chat with a running help is  a new feature.

We could do parallel calls, where the watcher can decide to switch out rapidly, or the other bot can continue.

A simple goalswitcheroo bot can preprocess every request and decide if we should switch back to the goalie and carry the users last response back.  This could happen in parallel, but we could display it linearly - so the user sees only the goal switcher checking, but if it says stay the course, then the current bot reply is already well underway.

So the UX is a constant stream after an initial wait, rather than two waits.