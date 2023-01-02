
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
### Baker
### Engine

## The Baker
This would wrap the whole app, passing `crisp` down to its child each time a new Pulse was received by the Engine.

```jsx
<Engine repo="interpulse-1" dev={{...covenants}} peers={chainId: [peerId1,...]}  >
	<Baker path="mtab/test-1" strategy={full: true}>
		<App />
	</Complex>
</Engine>
```

### Configuring the reconciliation strategy
When the reconciler is started, it is passed an options object that tells it what goals to pursue while doing its requested reconciliation.  By default it will synchronize only on demand, requiring the application to explicitly tell it to pull something down.

### Emitting partial reconciled events
Each time a new IPFS block is received, the reconciliation boundary will move forwards.  Currently we only announce when the full pulse is reconciled, but it is useful to announce before this as it can speed up React rendering opportunities.  To do this we would return a stream of events from `uncrush()` that returns a new iteration whenever a new block has been processed.  The async iterable would yield classes with CID links represented by a special Symbol, and the `isLoading` flag raised.  The async iterable would finish with the fully inflated pulse.  This would not include the network.  

### Marking punched out state
The React app needs to be aware of some portions of the complex that may not have resolved from [[CID]]s yet.

### Making HAMT appear like a Map
Currently the HAMT is a tree of CIDs with an opaque low level format.  In the sync version we would replace it with a single immutable map.  This Map would be the exact same Map as used internally by the HAMT as a cache.

Querying the Map means different things, depending on the reconciliation state at time of query.  `has( key )` when the Map is not fully loaded would give `true` if the partial Map contains the requested key, or `false` if the Map is fully loaded and does not contain the key, but will also return `false` if the Map is not fully loaded and the partial Map does not contain the key.  Caller needs to also check the `isLoading` flag to be sure.

Diff generation is done by taking the Pulse from the previous Crisp, and checking for diffs in the network.  Any diffs found are loaded up into the network slice by the

### Signalling to the reconciler
The App should be able to signal to the Reconciler that it needs different slices loaded.  This would be done with react context and a hook ?  Or pass in the complex object that you want to load, and the reconciler will figure out what you meant.

Later, your app will receive a prop that has an expanded slice at the location you requested.

### Reconciling History
Some applications want to use a previous version of the application where the data is frozen in place. This would need to be registered as a frozen hardlink in chainland, and is treated no different by the reconcilation process.

### Pulse structural sharing
When an engine is receiving pulses from a previous engine, it is responsible for making structural sharing happen between the pulses.  This will require the engine to be aware of what requests for CIDs it is currently fulfilling, and deduplicating these requests to ensure the same object is passed back by reference.  This means the Complex structural sharing is a substructure of the Pulse structural sharing.

### Mocking the complex during storybooking
Rapid mocking could be done by crafting a plain json object and then creating a mock Complex class out of it.  We could use the pulse updating tools directly for things like `setState` and for updating the network slice, and then generate a complex object from this.  Preferably actual chains would be used to create disposable temporary chains, then make a Crisp out of that.