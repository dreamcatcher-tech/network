
>[!tip] Created: [2023-01-02 Mon 15:41]

>[!question] Targets: 

>[!danger] Depends: 

Given a Pulse, generate a Complex object from it, using the provided sync rules.
Subscribe to future Pulses, so when a new Pulse comes in, make the next Complex object from it.
Dispatched this stream of Complexes down to the React app using throttling to give the app a chance to breathe.  


If the reuse is based on using Pulse constituents, then we do not need to provide the last Complex to rapidly update it with the new Pulse.  This also means we can update the latest Pulse before completely synchronizing the previous Pulse.

This is a transform from a Pulse in whatever partially hydrated state it may be in, and a static js object that shares the same pulse structure.

As new crawl events occur when new parts of the focused Pulse are retrieved, then a

Look inside the HAMT maps and reuse the immutable contents so we are sharing the same maps.

## API
```js
const crisp = pulse.bake()
const state = crisp.getState()
const children = crisp.listChildren()
if (crisp.hasChild('customers')){
	const customers = crisp.getChild('customers')
}
```

The interface may be decorated with convenience methods much as the Pulse class is, to aid DX, but it contains as a subset all the chain based operations and data in a real Pulse.

## Actors
### Crisp
### Pulse
### Syncer
### Engine

## The Syncer
This would wrap the whole app, passing `crisp` down to its child each time a new Pulse was received by the Engine.

```jsx
<Engine repo="interpulse-1" dev={{...covenants}} peers={chainId: [peerId1,...]}  >
	<Syncer path="mtab/test-1" inflation='full' subscription='latest' eviction='none'>
		<App />
	</Complex>
</Engine>
```

### Configuring the reconciliation strategy
When the reconciler is started, it is passed an options object that tells it what goals to pursue while doing its requested reconciliation.  By default it will synchronize only on demand, requiring the application to explicitly tell it to pull something down.

#### `subscription = 'latest' | 'deepest' | 'every'`
Upon receipt of a new Pulse, the strategies will:
1. Latest: abandon the current inflation and immediately restart on the latest Pulse
2. Deepest: await the current inflation reaching completion, then restart on the latest Pulse at time of completion.  This may skip some Pulses.
3. Every: await the current inflation, then move on to the next Pulse in the stream.  This may quickly fall behind.
#### `inflation = 'full' | 'lazy' | object`
1. Full will walk the entire [[App Complex]] 
2. Lazy will only walk what the application requests it to
3. Object contains a template for what strategy to apply based on the path within the [[App Complex]].  This allows for discrete controls over keeping some parts fully inflated and other parts (such as long customer lists) lazy updated
#### `eviction = 'none' | 'lru'`
1. None will never evict anything, and will eventually crash the machine
2. LRU will detect memory pressure and remove from cache whatever was least recently signaled by the app as being used.  

Signaling to the reconciler occurs using `has( key )` and `get( key )`.  `has( key )` will trigger the reconciler to seek to inflate, `get( key )` will remind the reconciler to keep this piece inflated, as it is being used.  Eviction is a two stage process.  Evicted items are put in a recycle bin, then Eviction causes React to rerender by creating a new root Crisp.  If anything renders and calls `.has( key )`, if it is in the recycle bin it will be moved back into the current cache.

### Reducing re-renders
Creating a new Crisp each top level render may be avoided if `getChild( path )` can tell if the cached map is still the same as last time, and providing the exact same object back.  This would need to be made aware if an eviction test is currently taking place so that a new object was constructed only for this purpose.

### Emitting partial reconciled events
Each time a new IPFS block is received, the reconciliation boundary will move forwards.  Currently we only announce when the full pulse is reconciled, but it is useful to announce before this as it can speed up React rendering opportunities.  To do this we would return a stream of events from `uncrush()` that returns a new iteration whenever a new block has been processed.  The async iterable would yield classes with CID links represented by a special Symbol, and the `isLoading` flag raised.  The async iterable would finish with the fully inflated pulse.  This would not include the network.  

### Marking punched out state
The React app needs to be aware of some portions of the complex that may not have resolved from [[CID]]s yet.

### Making HAMT appear like a Map
Currently the HAMT is a tree of CIDs with an opaque low level format.  In the sync version we would replace it with a single immutable map.  This Map would be the exact same Map as used internally by the HAMT as a cache.

Querying the Map means different things, depending on the reconciliation state at time of query.  `has( key )` when the Map is not fully loaded would give `true` if the partial Map contains the requested key, or `false` if the Map is fully loaded and does not contain the key, but will also return `false` if the Map is not fully loaded and the partial Map does not contain the key.  Caller needs to also check the `isLoading` flag to be sure.

Diff generation is done by taking the Pulse from the previous Crisp, and checking for diffs in the network.  Any diffs found are loaded up into the network slice by the

If the HAMT is not fully loaded, we set the `isLoading` flag, and continue to walk the HAMT until all nodes have been visited.  This will ensure that the gets cache is inflated fully, and this should be trimmed at crush time.  Each time a pulse is cloned, the last crisp is carried thru to allow reconciliation next time.

### Signalling to the reconciler
The App should be able to signal to the Reconciler that it needs different slices loaded.  This would be done with react context and a hook ?  Or pass in the complex object that you want to load, and the reconciler will figure out what you meant.

Later, your app will receive a prop that has an expanded slice at the location you requested.

### Reconciling History
Some applications want to use a previous version of the application where the data is frozen in place. This would need to be registered as a frozen hardlink in chainland, and is treated no different by the reconcilation process.

### Pulse structural sharing
When an engine is receiving pulses from a previous engine, it is responsible for making structural sharing happen between the pulses.  This will require the engine to be aware of what requests for CIDs it is currently fulfilling, and deduplicating these requests to ensure the same object is passed back by reference.  This means the Complex structural sharing is a substructure of the Pulse structural sharing.

### Mocking the complex during storybooking
Rapid mocking could be done by crafting a plain json object and then creating a mock Complex class out of it.  We could use the pulse updating tools directly for things like `setState` and for updating the network slice, and then generate a complex object from this.  Preferably actual chains would be used to create disposable temporary chains, then make a Crisp out of that.

### Recursive baking
Calling `bake()` at the top level causes all below to bake too.  The last bake result is held in a cache for all non-hamt objects.  All 

## Actions deep in the App
If each node in the Crisp could walk up to its parent, then a path to root could be discovered.  The engine could then be asked for the actions at that path, at a given approot hash, then functions mapped back and returned to the caller.  It could use context, rather than passing down actions that modify each Crisp: `useActions( crisp )` which gets the engine from context, then walks a path to root.

## Using the Pulse raw
Making a second layer that produces Crisps is annoying - the Pulse should be able to be passed in raw and used.  The only different to a Crisp is that the network is represented synchronously, and there are more convenient methods available on a Crisp as the internals of Pulses are hidden away.

Each Crisp has an approot pulse, and a path based on that approot Pulse that fully defines the Crisp.

? Could the state tree be the Crisp ?

Move all async queries into the pulse into requiring an async inflation call first, so that the internals are a little inconvenienced, but can quickly end up in sync land.



### Crisp as a wrapper
If a Crisp wraps a Pulse, and uses its access to the Pulse internals to provide instant access to the Pulse, and it intercepts methods to get children, then Crisp can be a standalone object ?

Hiding the internals of Pulses, but making them available upon request is good.  Using deep object access rules to trigger the reconciler is also good, since it is one less thing the dev has to manage.

`.has( key )` returns a symbol if it doesn't know for sure, and dev must call `isLoading( result )` to determine.  The first call to `.has( key )` will trigger the reconciler, so on subsequent rerenders `isLoading( result )` will return false, and so the result can be relied upon as definitive.

This might be a wrapper around the state tree, with some convenience methods.  The state tree is a DAG and so it can include all different link types.

Provide the Pulse within the Crisp so that for any given Crisp, can walk down again from root.  Crisps can be generated new each request, 
Calling `ensureChild( key )` signals the reconciler to fulfill the path to the requested slice.  If it returns false, it means it is attempting to load, if true then it has completed the load.  Presence is then ensured to be correct, so calls to `.has( key )` will be authoritative.

Requesting a Crisp child can be a signal to the reconciler that it needs to load that portion of the state.  If you ask for a child and it doesn't know if it exists or not, you receive a Symbol back indicating that

Crisp may allow deviation from the pulse by the use of get and set, to produce views.  These should be done as actual pulses tho ?

The reconcilers job is to:
1. walk each pulse it receives and apply the inflation strategy to load the data up into ram, based on the configurable inflation strategy
2. receive new pulses, abandoning the previous pulse and walking only the differences of the new pulse, based on subscription strategy
3. evict portions of the current pulse from ram to reduce footprint based on eviction strategy.