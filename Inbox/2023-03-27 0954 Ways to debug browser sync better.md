
>[!tip] Created: [2023-03-27 Mon 09:54]

>[!question] Targets: 

>[!danger] Depends: 


1. Make a jest test that opens up the app, and then keeps connecting clients to it until a timeout occurs that stops it from syncing.

If rapidfire lift, its as if the server skips sending a block
? can we make a browser based device that goes thru netlift ?

Want to check that the pulse stream was complete coming down from the server
Also want to complete the sync inside the engine, and do not start the next lift until this one is complete, since this has less wastage, gets to full sync faster.
Merge interpulse and Pulse lifts, since we can learn of an interpulse without it being sent separately.

? how can we have some independent comms link between browser and server so we can audit our own protocol ?  Should the server publish blocks that show what it currently sent to the client, and what requests the client received ?
Want the full state of the server available to the client so they can be compared side by side.


? Can this happen directly in browser in storybook ?
? can it be induced in a jest test with client and server doing the exact addition testing ?

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

Can cause this fault with a blank installation.
Seems to happen during rapid updates, particularly during open sequence.
If debug window is closed, then fault occurs more often, presumable because tears occur in the syncer.  Once fault has occured, customers path fails: `await interpulse.latest('/.mtab/remote/customers')` where it stalls forever waiting to uncrush the channel.
**Might have been uncrushing, got torn, but held the cache callback open, so that it was never resolved.**
? did we not receive all the blocks we require from the server ?

? how to know if the full channel got sent down in the lift ?
it must all come down, since it works sometimes - only during a tear does it fail.
is the current strategy for lift and sync the best one - one worth troubleshooting ?
? can an uncrush begin, then get interupted before the cache can be fulfilled ?
client attach what it is missing to the uncrush cache function.
Then can see what we are missing, so can request this from the server.

Did the message encoding cause a block to be missed ? this should show up as some other kind of error tho.

The channel is the thing that cannot be uncrushed, after a tear has occured.  How to get a list of all the CIDs that got transmitted down ?

Rapid fire walks on server side 

Be able to walk thru stalled crushes easily, and check if the server sent this down ?
Store a log of all the received lifted CIDs that can be browsed.

Whenever there's a bake tear, this error occurs.
? Are we sure that it is stalled on an uncrush cache fetch ?
Once there, can we run an uncrush on the raw block again ?

SetVirgin might be causing errors in completion ?
SetVirgin or setting a pulse early might be causing it to be recorded when it isn't fully synced ?

Definitely it is in the hamt compare for the customers collection, where a prior hamt is not fully available for some reason.
Somehow the hamt blocks are not fully being sent down.
Is it because prior did not complete, or is it because the current request did not complete ?
Suspect diffing on server side did not check against prior correctly, and failed to send down a hamt cid somehow, since channel cannot be uncrushed after diffing, but only sometimes, as tho a race condition occurs and then because something got dropped once, it can never catch up.

The channel for the Customers collection cannot be uncrushed as it appears incomplete - how to know where the missing CID is ?

Could a lifted interpulse fail to be written to disk, and so cannot be recovered to stream down ?

Throw an error if a sync walk doesn't have something in the cache ?  So wait for all the lifts to complete, then check if the sync walk fails.
? first, how can we know what CID we are missing ?

something to do with timing, since local server doesn't have this problem.  Something to do with tearing, since doesn't occur without tearing ?
? Is the pulse fully available on the server side ?
So make a checker that attempts to run the syncer locally on the server side, then report results.

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

Fuzzing the bake with tears at random intervals, then prove it can always recover.

Make a protocol for sending down the blockset along with each lift request, so we can audit if the blockset came down ?

Signal the completion of the lift, and be able to audit it as complete ?

## Notes

? What does it mean if a child is genesised but hasn't been created yet ?
? could this be messing up the syncer ?
run some static checks on the syncer working correctly, snapshot between different pulses, and ensure it transitions correctly
why are there multiple finalize() calls for the same address and pulseId ?
walks should never repeat, unless something is wrong


Difficulty with making it happen when debug window is open says it is unlikely to be server side, and likely a race condition client side.

Set timeouts on all syncer operations to detect when a stall has occured ?

Store the pulses and try rapidfire them into the syncer in test environment to simulate speed ?

Can we run a syncer when this error occurs, and see if we actually have all the blocks we should ?
This would mean the error is in the syncer code, not the lifter or the endurance

Do a reverse stream walk every time a pulse update is received.

Lift should send a manifest, and we should be able to trace this down on server side.

Make a pm2 tool to retrieve a given block cid.
Load up a second window, download the given block.
turn off all the caching.
Grind thru all combinations of hamt updates, of all combinations of blocks, and check that they provide a fully loadable Crisp.

Do the full sync walk at the mtab level, buffer pulses until each walk is complete, then do 
Provide a subscription to crisps out of interpulse.
This is retreating from the problem, but can still be just as effective, possibly more so.
Lifts occur then only as fast as the engine can pull them down, rather than flooding.

isBakeSkippable makes no difference.
**ignoring priorCids in the hamt transmissions fixes the problem.**
awaiting each streamwalk so no simultaneous streamwalks does not fix the problem
the missing pieces in the browser NEVER got transmitted.
the missing piece is always a hamt bucket.

## Priors unfaithful
? how can it be that sometimes the priors has a cid that we need, that DID NOT get transmitted, even tho it would have been lift requested ?

Every pulse that is received, a lift request is made for it, rather than completing sync then getting the next one.
The streamwalks have not finished before the next one starts.
? could be the interpulse request caused a hamt walk that was incomplete or not transmitted ?
Is liftTip received tripping when just an interpulse tip was received ?
it doesn't actually do a full lift request if the interpulse just got received ?
Can either fix interpulses properly, or find out what the walk didn't trigger correctly ?

If pulses are requested too rapidly, priors holds some cids that never ever get transmitted.
If this is slightly slower, such as having the browser debug window open, these missed cids do not occur.
