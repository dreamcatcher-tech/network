>[!tip] Created: [2022-10-21 Fri 13:34]

>[!question] Targets: 

>[!danger] Depends: 

Building a GUI application in react is best done as props passed down from the top.
Fundamentally a Reactive GUI application represents a snapshot of state, even tho that state may have been assembled from present and past state.  And so, the engine would build and maintain a large object that gets dropped down via props, 

The UI data binding can specify what type of sync it would like for different paths in the app, such as collections being fully synced, or on demand, permitting lazy load apps.

On demand would pass a call to the `onLoadPath( path )` function that gets passed down from the top, which would cause a new path to be loaded.  This would also get called for sync apps to prioritize the loading, and to indicate freshness for cache ejection if the top level object is getting big.  Basically API queries are handled by `onLoadPath( path )` calls, and the engine modifies the top level state as things change.

GUI just needs the state from inside all the the chains, and the children.  The children can be supplied using a Symbol as a key so that state can be consumed directly rather than behind the `state` key.

### Past data
If a GUI component requires data from the past, how should it request this ?
Could supply options like `onLoadPath( path, -5)` to get the item 5 back from current along the current main path. 

## Implementation



### Alternatives
A proxy function to log what paths were getting read during renders, and prune the state.
