
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

### `direction = 'breadth' | 'width'`
How to walk the [[App Complex]] - breadth first, or depth first.

#### `eviction = 'none' | 'lru'`
Strategy for memory management thru cache eviction
1. None will never evict anything, and will eventually crash the machine
2. LRU will detect memory pressure and remove from cache whatever was least recently signaled by the app as being used.  
Eviction is a two stage process.  Evicted items are put in a recycle bin, then Eviction causes React to rerender by creating a new root Crisp.  If anything re-renders the app signals it need something in the recycle bin it will be moved back into the current cache.  On the next re-render the bin will be deleted.

#### `concurrency = N`
0 or default is unthrottled.
Otherwise at most N requests for channel objects or Pulses will be underway.

### Signalling to the Syncer
Signaling to the reconciler occurs implicitly using the two map based access methods on the Crisp:
1. `hasChild( path )` will trigger the reconciler to seek to inflate that path if it has not done so already, or if it has inflated already it will reinsert it to the top of the LRU queue.  If this path exists in the [[App Complex]] then in some future render, this test will return `true`.
2. `bakeChild( path )` will remind the reconciler to keep this piece inflated, as it is being used.  It will throw an error if `hasChild( path )` is `false`

### Reducing re-renders
Creating a new Crisp each top level render may be avoided if `bakeChild( path )` can tell if the cached map is still the same as last time, and provides the exact same object back.  This would need to be made aware if an eviction test is currently taking place so that a new object was constructed if this was an eviction render.

### Emitting partial inflation events
Each time a new IPFS block is received, the inflation boundary will move forwards.  Currently we only announce when the full pulse (minus any HAMTs) is inflated, but it is useful to announce before this as it can speed up React rendering opportunities.  To do this we would return a stream of events from `uncrush()` that returns a new iteration whenever a new block has been processed.  The async iterable would yield classes with CID links represented by a special Symbol, and the `isLoading` flag raised.  The async iterable would finish with the fully inflated pulse.  This would not include the network slice.  The advantage is that providing `state` to the app would be as fast as possible, and would not wait for the rest of the Pulse to inflate.

Using the Statetree as the basis for Crisps would speed this up even more.

### Progressive first sync
Waiting for the first sync to complete could be painful.
If we have reached the end of diffing with the previous pulsemap, then we should emit new Crisps rapidly, since incomplete but consistent information is better than no information.
Crisps that are undergoing mutation rather than deletion or addition could provide an extra `isUpdating` flag that indicates the view you have right now is stale and a new one is coming, so you can choose to keep displaying it, or signal to the users somehow, or use the old version.

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

## Tracking the inflations
Because the inflation state is independent of a Pulse, we must track it separately.  Because we want Crisps to be deterministic, we must snapshot the current sync state.  But we also want structural sharing and good garbage collection properties.  

### A Map of Maps
To solve these constraints we opt for a map of maps.  The top level map is held by the Syncer instance, and is a map of pulseIds to a map of channelIds.  The map of channelIds relates each channelId to a pulseId.  A Pulse is considered 'synced' if all the channelIds have been matched to pulseIds and all diffs have also been related to pulseIds.

This MapMap is passed to each Crisp at creation, and each child from that Crisp also receives it.  Each call to `.bakeCrisp( path )` uses the MapMap to get the pulseId that will back the child.  The child will attempt to fetch the Pulse synchronously from the Syncer, and will return a Crisp wrapping the result, whatever it might be.

Downside is the performance of a large map, but given that Crisps are only needed in memory constrained environments anyway, the map will have other limits on it, so performance should remain strong.

### A Tree of Maps
Alternatively if we held a Map for each root pulse that mapped its channelIds to other maps then this would more closely model how a Pulse holds symlinks and children.  Symlinks would be resolved by path and then pointed to if valid, but if the pointer was out of date we would just make a new map of the historical Pulse.

Since the goal of the Crisp is a synchronous version of the app complex that exactly mirrors the Pulse structure, modelling as a tree of maps is closer.  It has better garbage collection properties as the previous tree can be discarded fully with no need to check anything.

The inflated map should be exactly the HAMT, with the exact same objects within it.  This minimizes new object creation, and eases debugging and architecting.  The object will grow as the map is inflated since we use object reference in place of hash reference.

Has some speed advantages over a large map, but fails because as the Syncer expands, shared pointers would need updating too, or else they will be stuck on an uninflated version.  Stale pointers would need special treatment too, so MapMap is simpler.

Big advantage is in deletion - removing a single reference deletes the whole tree, rather than incuring the cost of walking the tree.

In a synchronous context IPORM translates in the following 3 ways:
1. For regular IPORM objects we are providing some simplified version of them.  
2. For HAMT objects we are providing a Map with optional inflation params.  
3. For hashlinked objects we are using object references with some inflation params.
So IPORM would provide different objects back for HAMTs based on context, then devs could make optional wrappers around those objects.  For any given IPORM model, the syncer can produce back class objects with different properties within them.  HAMTs are a wrapped form of hashlinked data.

So the dev needs to tell IPORM where the hashlink breaks are using schema, and then if in hashlinked or referenced mode, the calls to retrieve that data need to
IPORM should allow for an object to be fully inflated based on some params, like how `.crush()` works.  Hashlinked boundaries are marked as either an inflation boundary or a hash boundary.

To make the IPORM model work with both raw IPFS and Chains, all that is required is how it resolves links and inflation boundaries.  The same interface can be supplied to the consumer, which is classes with logic of their description,

Both levels could be used together, mixing IPFS and chain data if required. 

In a synchronous context the data is returned directly or an error thrown if not inflated, in an asynchronous context the result must be awaited, but it is definitive.

Reducers might be able to use the IPORM objects as a means of doing things like `useState` and other inflation related things.

The whole process of inflation is really turning the `tip` in each channel into a fully resolved Pulse, rather than stopping at the object boundary.  Internal and external boundaries.


### Storing the inflations inside Ipld classes
Make the Pulselink class store an object that represents its inflation.
Make the HAMT class able to store a map of its contents which is abandoned upon clone.

So given a IPORM object (such as a Pulse) and optionally its predecessor from arbitrarily long ago, walk the class deeply to find any instances of HAMT or PulseLink.  Use the classmap in the class to get this information without walking super deep like in State.

Begin inflation using diffing, doing all the mods and deletes first.  Then emit new rootCrisp events as the adds are inflated.  Store the objects in the HAMT and Pulselink classes as Immutable.Map and the pulselinked IPORM class.  Recursively do the same inflation based on the inflation strategy.

While there is no previous instance, emit new rootCrisp events so the app can render progressively.
When there is a predecessor, do not emit new rootCrisp events until the deletes and modifies are fully updated, to avoid flickering in the app.  Then emit new rootCrisp events for each add, so the app can progressively render and be constent the whole way along.

Ensure Crisp is singular and consistent by memoizing each call to its children, and using only the map at the instant the call was made.  This also stops wasteful re-renders since the object is the same.  Each new root causes all previous calls to be discarded.

The consistency model of a Crisp then, is that for a given Crisp it will always give the same structure results whenever its children are accessed, but the later the Crisp is asked for its first piece of data, the more the data would have been inflated by the Syncer.  So once asked it will always give the same answer, but it only reifies itself at the instant of asking - before asking you can't say for sure what the answer will be, as it depends on the hydration boundary.

We can use a weakmap to cache the crisp against the map that is supplied to it, so we can cache all crisps if the map they were given is still the same, allowing React to speed up its renders.

Be able to flag an IPORM class or field as not part of the Syncer, so only specific things come thru.

### The Syncing Process
First update all the diffs - the pulse is not replaced until this completes, since the next pulse needs to use the existing base if this is the case.  Once complete, replace the backing pulse with the new one.  Check for an 'up to' counter in chain Ids, and continue inflation from that point on.  If the map already has this item, then skip it as it would have been updated by a diff check earlier.

## Change awareness
When a new approot pulse arrives but is not fully synced, the previous channels map cannot be used as we may present inconsistent data to the application by bluring the old and the new Pulse together unintentionally.

This can be mitigated by only reacting to the new Crisp after it is fully synchronized, but this may take a long time and may be concerned with regions of the application not of interest to the user immediately.

By providing `crisp.isPending()` we can allow a crisp to be aware if it *might* be succeeded by different data.  As the syncer walks the diffs and finds out, we can add certainty to different paths in the tree.  `crisp.isSucceeded()` checks if we have been succeeded by new data, but the syncer has not completed yet so cannot provide a consistent top level prop yet.  `crisp.getSuccessor()` if can be used to get the successor, if there is one.

This approach leaves it to the app to show new data quickly, or wait for the full sync to complete, or offer some visual cues to the user that change is occuring.

This is especially interesting to the user if we are waiting on their changes to be rippled thru the tree.

## Testing with Crisps
### Options
1. Make a test engine, and fork the root chain each time
2. Make a crisp from js, and reload a mock
3. Load up chains from CAR files, allowing browser to cache them

Loading the data into the chains directly would take too much time, 
Make an alternate endurance source, so when supplied, pulse data is looked up using one of the alternate sources.
Make a separate repo that holds large binary commits.  Download the whole file, parse it, then have a map of all the bytes in that large array.

### Exporting
First load up all the data by doing an import on json data and creating customers.  This may take some time.  Then do a walk using the syncer to pass back a map with every Pulse that is required to be synced from the given pulse.  Ensure these are stored in order.  

### Importing
Get a handle on a stream to the large data file using `fetch()`.  This should be cached by the browser.
Begin processing the stream to turn it into blocks that can sit in ram in a large Map object.  We need not decode everything, but we do need to be able to call on the bytes if required.
Better would be a binary format that lets us walk some kind of tree index to get the CIDs out.
Better still would be a remote server that held the chain live and could sync it down using no intermediate format.

Probably still useful to have an http fetcher.  Each block to disk independently seems  a bit too much load.
