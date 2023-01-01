
>[!tip] Created: [2022-12-29 Thu 14:01]

>[!question] Targets: 

>[!danger] Depends: 

Purpose is to remove the need to consider async operations when inside a React application.
Loading progress and completion is signalled by altering the top level data that is passed down.
It removes all the asynchrony, and replaces any unsettled promises with `isLoading` status.
It receives signals from the app as to what is needed by explicit calls to `getChild( path )`.

The `network` slice on the complex need not be visible to users at all.
If ImmutableJS is used, then the cloning speed is near instant.

Reason for not building actual Complex objects, and using raw data is?
If used Complex objects in the network, then would not lose much ?


Updating the root any time a child changes, or finishes loading.

Make a replica of the network object in Pulse, but update alias tables based entirely on the channel alias changes.

But can the pulse itself be used as the complex object somehow ?
A thin facade over the top of the pulse could simplify construction and syncing of the Complex.
What about the state tree ?

So maintain the channels list, and update alias tables based on the channel list, and for each child, pass in the pulse that it is made from along with the abortable resolver.

isLoading means the children have not yet been fully explored and loaded, so the list may alter.

Move wd to be a property of the root of the tree only, as it is set once for a given complex tree.

Pass down the resolver, the root callback, the pulselink to use, the path back to root.
Could deduce by getting the parent, asking the parent for our id, then repeat until hit the root.
Path would be a series of integers: [4,3,5,4,39,12] which would be all that is required to update the whole tree.
Buffering can occur if the rate of updates is high, and multiple updates can be merged into one.
All updates are merged until the consumer next pulls from the iterable.

? How can covenant authors also use the complex for writing apps with ?
They need to use async, since we cannot have a long lasting cache of all data, and want to drop each chain from ram asap, plus they have no strong need for sync, nor for views of all the data all at once, unlike a react front end app.

## V1
Build the complex from a pulse, start a new one from the next pulse, which only deals in diffs.
Subscribe to any complex to get updates when a new version of this complex is discovered due to asynchronous loading.  Updates to a given complex come with a new root.

Each complex knows its path from root, and is responsible for resolving itself and then notifying the root

Children are stored as Complex objects.

Network is an immutable map of paths to Complex objects or an integer for the channelid if not loaded ?
The type of the path can be determined by getting the channel and getting the aliases.
So names map goes to channelIds, which then gets looked up directly.

Loaders should be separate objects to the complex, and they service the complex, because each time a change occurs, the reference is stale.

? why do we need to subscribe to changes ?  this is a reactive app, so the root complex is always replaced.  Loaders are passed the root complex update function.
Update takes the Store, calls `store.setState( path, next )`
Would have passed the store down to the children too.
Tree is set AFTER the child has been updated based on the new root.
BUT tree needs to be live, so might be the store, so you can get the latest.
BUT if we want the old version, we should allow that to be kept hold of ?
Or, are we saying that each item holds the last tree that contained this version.

Complex made from a hashlocked pulse is how to use past trees ?
mutable reference to root ?

### Update to parent only
Updates are done the same as the chains do it - to the parent only.
Parent then broadcasts to any listeners, and also updates itself, which updates its own parent.
This only stops at the root.
Each update, the child is now the update target, not current version any more.
If you hold a reference to a complex, it will only update once, then that one will update.

### Update via root
To subscribe to a specific complex, it would subscribe to the root, then check its own path for changes each time.  If its own path has changed, it will update the subscribers.
But, now the listener has a stale reference.
If the callback was just a single call like in redux, then the caller would have to call getState or similar.


BUT this might ruin how virtual children are created.
Need to indicate when a Complex is virtual, and has no pulse attached to it.

BECAUSE THE CHANNELID SYSTEM IS COW, the path never mutates, but it can be deleted.
Each complex tracks a chainId, so moving that chainId causes the complex to move from it.
? What about if the complex is forked ?  It is defined by its path, so the original path is what matters.

? What about if the previous complex did not finish resolving fully, but now the next one is starting ?
Just mark as incomplete, so we know to use the pulse that came before as base.
Should be able to restart with a new pulse and have it ripple down, updating whatever the current state of affairs is.
Optionally stop any further updates at the root, or listen to them and use this to inform the comparisons.

`complex.update( pulse, pulseResolver )`

## Error was removing too much of the chain
The Complex should be a synchronous representation of the chain logic.
Benefit

There should not be virtual Complex modification - there should be virtual chain constructions

