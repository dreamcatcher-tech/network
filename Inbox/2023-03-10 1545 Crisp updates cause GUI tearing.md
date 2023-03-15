
>[!tip] Created: [2023-03-10 Fri 15:45]

>[!question] Targets: 

>[!danger] Depends: 

If the lift is slow to come down for the next root pulse, then the GUI redraws with a pulse that has no children.

If we have no completed pulse, then just draw the last full pulse ?  But this doesn't work if we still haven't loaded everything, since must be able to operate while the crisp is loading.

Crisp updates are always from the top down - never sidways - so there is never any need to update a crisp sideways - as the crisp is walked from top down, can switch out to a previous version.

Could cause the next crisp to never be pushed out unless the complete tree has been baked ?
If we have nothing, then release the crisp progressively, else release only completed updates.

Want a graceful update, where if we are uncertain, the crisp acts like the last crisp, but if we are certain, then it acts definitely.

Once it is deep loaded, it deletes the link to prior crisps, freeing up the memory.

Block tearing of the syncer, so it always moves forwards without getting torn pulses.
But would this be too slow to keep up ?
Could we skip ahead ?
Could prior be the current deepest synced thing ?
Is the diff we are asking for using a version we have not fully synced down yet ?
Partially baked blocks seem to be responsible for tearing.
They become prior, and have no baked children, so we end up redoing the sync work.

## What is the latest Crisp ?
The crisp with the most data could be considered the latest ?
Or, every crisp is latest, by way of passthru of the prior crisp ?
So if each crisp had the last crisp, then if it is unresolved, it goes back.
Diffing for a new pulse should walk back to the last crisp that was resolved.
This would allow multiple new pulses to arrive, be un walked before the next one arrives, and yet we would still have something meaningful to compare with as the last crisp would tell us what pulse to use for diffing.

## Two layers of syncing
Syncing the complex is one part, baking the complex is the other.
These two should be independent.
