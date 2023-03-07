
>[!tip] Created: [2023-03-07 Tue 09:31]

>[!question] Targets: 

>[!danger] Depends: 

If we got asked for a `crispDeepPulse` sync type, then we should start the process of walking it upon receipt, waiting for blocks as they stream in.  When a new pulse is received, we should fulfill anything that is waiting for this to be resolved.  The walker should be the first point aware of pulses that have come as children.

Syncer could pull out the resolver of the parent pulse, and continue to use this on the way down ?
So the endurance resolver is never called directly again, except to be told it wants a deepCrisp.

`.resolveLocal( pulseLink )` should be used 

`.resolveDeep( target, parent )` to signal that we are a walker, and have previously asked for a deep walk.

BUT if the lift was streaming in, then we couldn't possibly ask for something before it had arrived ?

Must be compatible with stopping the sync based on a schema, so that some parts of the app can be dynamically loaded.

The repo could be hooked so that when a given block arrived, the resolver carries on.

Want to resolve by waiting for the car stream, using a prior car stream if diffing was used.

As we are diffing the hamts, start streaming down the logged blocks as we retrieve the additions.
We should only be logging the new pulse, not the prior.
Seem to need to replace the resolver in the pulse.

What about ditching bitswap altogether ? Particularly since there is no swarm, and it has no privacy settings.  The only way to request things is at the pulse level, and when requested we always send the whole thing down with hamts too, since you need that most probably.

Recovery then allows asking for a pulse that we expect to be part of a deep request.
Resolvers are stored based on
Chain the resolvers until the lift has completed, when it goes straight to blockstore.
Blockstore only ever gets populated from lifts, so therefore whenever we ask, it just adds a marker for that CID, and 

## Diffing
Requester should be able to say that it has a particular block already, and this should be subtracted from the stream that will be returned.  If this block has not completed lifting, then it should still be in progress, so can still treat it like it is diffed.

## mtab doing deep tracking
If mtab pulled updates deeply, then the syner task should just wait ?

## Lifecycle
mtab gets an update.
it pulls the full pulse and attaches it on the `rx.latest` key.
Syncer is triggered, so it starts walking.

## V1
`Syncer.create( liftResolver, covenantResolver )`
`const resolver = liftResolver( ` create a resolver at the top of each sync op OR
`const pulse = await liftResolver( pulseLink, parentPulseLink )` 
Any time we called this, 
With no `parentPulseLink`, we do a deep recovery, else we check local first, then await a notification that a particular block as come in to the stream.
If no local, 

Each request for the top

## V2
Two functions
`const resolver = await createLiftResolver()` Make a new resolver scoped to a lfit request

