
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


### Marking punched out state
The React app needs to be aware of some portions of the complex that may not have resolved from [[CID]]s yet.

### Making HAMT appear like a Map
Currently the HAMT is a tree of CIDs with an opaque low level format.  In the sync version we would replace it with a single immutable map.

### Signalling to the reconciler
The App should be able to signal to the Reconciler that it needs different slices loaded.  This would be done with react context and a hook ?  Or pass in the complex object that you want to load, and the reconciler will figure out what you meant.

Later, your app will receive a prop that has an expanded slice at the location you requested.

### Reconciling History
Some applications want to use a previous version of the application where the data is frozen in place. This would need to be registered as a frozen hardlink in chainland, and is treated no different by the reconcilation process.

### Pulse structural sharing
When an engine is receiving pulses from a previous engine, it is responsible for making structural sharing happen between the pulses.  This will require the engine to be aware of what requests for CIDs it is currently fulfilling, and deduplicating these requests to ensure the same object is passed back by reference.  This means the Complex structural sharing is a substructure of the Pulse structural sharing.

### Mocking the complex during storybooking
Rapid mocking could be done by crafting a plain json object and then creating a mock Complex class out of it.