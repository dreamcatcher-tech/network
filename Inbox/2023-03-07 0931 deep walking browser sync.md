
>[!tip] Created: [2023-03-07 Tue 09:31]

>[!question] Targets: 

>[!danger] Depends: 

If we got asked for a `crispDeepPulse` sync type, then we should start the process of walking it upon receipt, waiting for blocks as they stream in.  When a new pulse is received, we should fulfill anything that is waiting for this to be resolved.  The walker should be the first point aware of pulses that have come as children.

Syncer could pull out the resolver of the parent pulse, and continue to use this on the way down ?
So the endurance resolver is never called directly again, except to be told it wants a deepCrisp.


`.resolveDeep( target, parent )` to signal that we are a walker, and have previously asked for a deep walk.

## Diffing
Requester should be able to say that it has a particular block already, and this should be subtracted from the stream that will be returned.  If this block has not completed lifting, then it should still be in progress, so can still treat it like it is diffed.