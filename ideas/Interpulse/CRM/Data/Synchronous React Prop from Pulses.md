
>[!tip] Created: [2023-01-02 Mon 15:41]

>[!question] Targets: [[Request for React Prop]]

>[!danger] Depends: 

It is possible to make a lightweight wrapper around a Pulse named a Crisp which can give a synchronous snapshot of the Pulse regardless of its full hydration state.  In concert with a Syncer, Pulses can be hydrated and their contents walked to cause them to cache.

## API
```js
const crisp = Crisp.bakeRoot( pulse )
const state = crisp.getState()
const children = crisp.listChildren()
const children2 = [...crisp]
if (crisp.hasChild('customers')){
	const customers = crisp.bakeChild('customers')
}
```

To aid DX the interface may be decorated with convenience methods much as the Pulse class is, but it contains as a subset all the chain based operations and data in a real Pulse.

## The Syncer
This would wrap the whole app, passing `crisp` down to its child each time a new Pulse was received by the Engine.

```jsx
<Engine repo="interpulse-1" dev={{...covenants}} peers={chainId: [peerId1,...]}  >
	<Syncer path="mtab/test-1" inflation='full' subscription='latest' eviction='none'>
		<App />
	</Complex>
</Engine>
```

### Configuring the syncing strategy
When the Syncer is started, it is passed an options object that tells it what goals to pursue while doing its requested reconciliation.  By default it will synchronize only on demand, requiring the application to explicitly tell it to pull something down.

#### `subscription = 'latest' | 'deepest' | 'every'`
Control behaviour upon receipt of a new Pulse
1. Latest: abandon the current inflation and immediately restart on the latest Pulse
2. Deepest: await the current inflation reaching completion, then restart on the latest Pulse at time of completion.  This may skip some Pulses.
3. Every: await the current inflation, then move on to the next Pulse in the stream.  This may quickly fall behind.
#### `inflation = 'full' | 'lazy' | object`
Control what inflation goals to pursue
1. Full will walk the entire [[App Complex]] 
2. Lazy will only walk what the application requests it to
3. Object contains a template for what strategy to apply based on the path within the [[App Complex]].  This allows for discrete controls over keeping some parts fully inflated and other parts (such as long customer lists) lazy updated
#### `eviction = 'none' | 'lru'`
Strategy for memory management thru cache eviction
1. None will never evict anything, and will eventually crash the machine
2. LRU will detect memory pressure and remove from cache whatever was least recently signaled by the app as being used.  

Eviction is a two stage process.  Evicted items are put in a recycle bin, then Eviction causes React to rerender by creating a new root Crisp.  If anything re-renders the app signals it need something in the recycle bin it will be moved back into the current cache.  On the next re-render the bin will be deleted.

### Signalling to the reconciler
Signaling to the reconciler occurs implicitly using the two map based access methods on the Crisp:
1. `hasChild( path )` will trigger the reconciler to seek to inflate that path if it has not done so already, or if it has inflated already it will reinsert it to the top of the LRU queue.  If this path exists in the [[App Complex]] then in some future render, this test will return `true`.
2. `bakeChild( path )` will remind the reconciler to keep this piece inflated, as it is being used.  It will throw an error if `hasChild( path )` is `false`

### Reducing re-renders
Creating a new Crisp each top level render may be avoided if `bakeChild( path )` can tell if the cached map is still the same as last time, and provides the exact same object back.  This would need to be made aware if an eviction test is currently taking place so that a new object was constructed if this was an eviction render.

### Emitting partial inflation events
Each time a new IPFS block is received, the inflation boundary will move forwards.  Currently we only announce when the full pulse (minus any HAMTs) is inflated, but it is useful to announce before this as it can speed up React rendering opportunities.  To do this we would return a stream of events from `uncrush()` that returns a new iteration whenever a new block has been processed.  The async iterable would yield classes with CID links represented by a special Symbol, and the `isLoading` flag raised.  The async iterable would finish with the fully inflated pulse.  This would not include the network slice.  The advantage is that providing `state` to the app would be as fast as possible, and would not wait for the rest of the Pulse to inflate.

Using the Statetree as the basis for Crisps would speed this up even more.

### Inflating History
Some applications want to use a previous version of the application where the data is frozen in place. This would need to be registered as a frozen hardlink in chainland, and is treated no different by the reconcilation process.

### Pulse CID deduplication
When an engine is receiving pulses from a previous engine, it is responsible for making structural sharing happen between the pulses.  This will require the engine to be aware of what requests for CIDs it is currently fulfilling, and deduplicating these requests to ensure the same object is passed back by reference.  This means the Complex structural sharing is a substructure of the Pulse structural sharing.

### Mocking the Crisp during storybooking
Rapid mocking could be done by crafting a mock Pulse tree, or plain json object and then creating a mock Crisp class out of it.  Preferably actual chains would be used to create disposable temporary chains, then make a Crisp out of that.

### Actions deep in the App
Each Crisp has access to the actions available to it as a result of its covenant.  These are generated by calling into the Engine using the current Pulse to get back the actions, with memoization of the call.

### Crisp HAMT structural sharing
When an engine is syncing from a remote, as new Pulses become available, the Syncer is responsible for ensuring an Immutable Map assosciated with each Pulse is re-used as much as possible based on the diff with the last known HAMT instance.

During pulsemaking, the gets and puts inside the HAMT are cached, but the focus of these caches is on rapid diff detection from the previous Pulse, not on complete inflation with a possibly skipped lineage.  For this reason, the map inside the HAMT used to cache gets must be separate and managed by the Syncer directly when the Engine is in follow mode with a remote Pulsestream.

Whenever a new Pulse is received, the inflater looks at the last known Pulse that it received, which may not be any of the immediate parents.  For the Network item, it calculates the diff between the two.  It then takes the get cache of the previous Pulse and updates it with the detected differences.

As new IPFS blocks stream in, expanding the inflation boundary, the Immutable Map that maps Pulses to inflation maps is updated with a new immutable inflation map.  This means that when `.bakeChild( path )` is called, the snapshot view stays permanently with it, so the Crisp never appears to mutate over time as inflation expands.  This same top level map is used for cache management too.

The inflation map holds a marker for what count it was up to in the previous inflation.  If the inflation had not finished with the previous object, it will continue on where it left off, storing its progress as the channelId count that it is up to.  The other HAMTs for hardlinks and other types are generated based on the contents of the channels list, since only the channels list has ability to resume due to its monotonic counter, and all the other hamts are convenience methods anyway.

Syncing in only possible for crushed Pulses for simplicity right now.

