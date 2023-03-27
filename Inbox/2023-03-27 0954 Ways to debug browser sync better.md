
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

SetVirgin might be causing errors in completion ?

## Problem
Cannot recreate the sync in a test run, so cannot tune performance effectively.

## Checking delivery was complete
Can start a checker on each lift request to fully wait until the whole thing is completed ?