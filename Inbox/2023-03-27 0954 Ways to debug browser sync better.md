
>[!tip] Created: [2023-03-27 Mon 09:54]

>[!question] Targets: 

>[!danger] Depends: 

? Do small runs in a test environment ?
? replay the test environment as a chain somehow ?
? how do we know if we have received a complete Pulse or not ?
? How to know where the sync stalled ?
? Is lifter transmitting completely and correctly ?
? How to see inside the lifter protocol, to trace down if it did a complete sync correctly ?
? did the syncer get asked to lift with a truly fully walked prior ?
? how to check a manifest of what was due, and what we were missing ?
? can we audit back in time for what was delivered by the lift protocol ?
? can lift detect stalling and alert ?
? when it stalled, what did it stall on and how can we replay what it was up to ?
? is abort causing the cache to be broken so that upon receive things are not being ingested correctly into the block cache ?

SetVirgin might be causing errors in completion ?
SetVirgin or setting a pulse early might be causing it to be recorded when it isn't fully synced ?

Definitely it is in the hamt compare for the customers collection, where a prior hamt is not fully available for some reason.
Somehow the hamt blocks are not fully being sent down.
Is it because prior did not complete, or is it because the current request did not complete ?
Suspect diffing on server side did not check against prior correctly, and failed to send down a hamt cid somehow, since channel cannot be uncrushed after diffing, but only sometimes, as tho a race condition occurs and then because something got dropped once, it can never catch up.

The channel for the Customers collection cannot be uncrushed as it appears incomplete - how to know where the missing CID is ?

Could a lifted interpulse fail to be written to disk, and so cannot be recovered to stream down ?

## Problem
Cannot recreate the sync in a test run, so cannot tune performance effectively.

## Checking delivery was complete
Can start a checker on each lift request to fully wait until the whole thing is completed ?

## Solutions
Graphical tree browser where the crisp can be navigated, and sync status of each path be viewed.
Redux reducer so we can use the forward and back tools to browse each Crisp ?
Show the pulses and the lifts as they came in, matched up to the Sync efforts.

Make the tree still remain visible while moving the syncer span (ie: which pulse was being synced) and the crisp span (ie: which crisp was being rendered) so can see the status of each one.

Make the Crisp browseable using getters so can drill down in browser ?

Provide a function on the pulse to do a complete walk of itself, and of its children, using a getter ?