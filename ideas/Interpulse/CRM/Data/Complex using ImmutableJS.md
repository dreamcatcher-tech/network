
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

So maintain the channels list, and update alias tables based on the channel list, and for each child, pass in the pulse that it is made from along with the abortable resolver.

isLoading means the children have not yet been fully explored and loaded, so the list may alter.

Move wd to be a property of the root of the tree only, as it is set once for a given complex tree.

Pass down the resolver, the root callback, the pulselink to use, the path back to root.
Could deduce by getting the parent, asking the parent for our id, then repeat until hit the root.
Path would be a series of integers: [4,3,5,4,39,12] which would be all that is required to update the whole tree.
Buffering can occur if the rate of updates is high, and multiple updates can be merged into one.