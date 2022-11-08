>[!tip] Created: [2022-10-21 Fri 13:34]

>[!question] Targets: 

>[!danger] Depends: 

Key concept is to represent the current chain tree as a single large JS object, and provide a mechanism to eject stale parts, or load needed parts from the [[App Complex]]

Building a GUI application in react is best done as props passed down from the top.
Fundamentally a Reactive GUI application represents a snapshot of state, even tho that state may have been assembled from present and past state.  And so, the engine would build and maintain a large JS object that gets dropped down via props, 

The UI data binding can specify what type of sync it would like for different paths in the app, such as collections being fully synced, or on demand, permitting lazy load apps.

A recursive structure is defined here, which can be used to render a reactive GUI application as a surface to the chain tree underneath.

A mapping between covenants and components, and between paths and components is shown.  This lets UIs be composed by unit tested components, which are laid out based on the chain structure.  

Testing of the UI can be done with mocked up js objects.  Testing of the blockchain can be done with jest unit tests.  Testing of the interface between blockchain and UI can be done by verifying the js object reflects the changes in the blockchain.

It may be convenient to use the Complex constructor function within the covenants themselves, as it presents a simpler interface to use data from multiple chains easily.  Then some of the reducer logic can be moved to things that only process Complex objects, allowing code reuse in the UI.

Complex could include functions to virtually dispatch actions, using the covenant reducer to say what the next state is.  This would allow a simulated version of the app to be presented.  Then it could attempt a merge back with the main app branch.  This can be faster than redispatching the individual actions, is easier to merge than handling actions from multiple sources causing conflicts.  This is offline first, and should be the default way that changes are made to the main app, so the app is always operating in offline mode, and the only variable is how long it is offline for.

## Format

`{ state, binary, network, actions, isLoading, wd, tree }`

### `state`
This is the json state of the chain.

### `network`
The recursion point.  This is an array, in channelId order, of all the network elements of this chain.
eg: `[{ path, type, state, network, actions, isLoading}]`.  Array is used for performance reasons over object, as `{...largeObject}` gets slow as the key count gets large, but `[...largeArray]` stays at 0ms regardless of array size.

### `actions`
Object of functions that the current chain can execute.  Has schemas attached so that a crude UI can be provided.

### `isLoading`
If the data is out of date and the engine is currently trying to update it, or any of the children are not loaded or out of date, or the list of children has not loaded fully yet.

### `wd`
The current working directory of the engine

### `tree`
The entire application object.  This contains everything that the engine currently knows.

## Features

### Overridding chain behaviour
Sometimes a visual component may wish to provide some actions that do not require chain state to enact, such as printing a page.  In this case, extra actions can be dropped into the actions json, and so the datums will display it as tho it came from a chains api.

Eg: routing in the CRM stores only references to customers, but we would like to view and edit those customers.  They are not real children of the routing chain, but because we have the top level object, we can get the items out.  The root object

### On Demand Data

Sometimes there is too much data to be fully loaded.  The UI should be able to display subsets of data, and to load more fluidly as the user navigates the site.

On demand would pass a call to the `onLoadPath( path )` function that gets passed down from the top, which would cause a new path to be loaded.  This would also get called for sync apps to prioritize the loading, and to indicate freshness for cache ejection if the top level object is getting big.  Basically API queries are handled by `onLoadPath( path )` calls, and the engine modifies the top level state as things change.

Might use an `onUnloadPath( path )` call to signal to the engine that the data is no longer being viewed

GUI just needs the state from inside all the the chains, and the children.  The children can be supplied using a Symbol as a key so that state can be consumed directly rather than behind the `state` key.

Inside each child there is an extra key `loading: true` to show that the child has not fully loaded.  The current chain state is always loaded, 

By calling the function `complex.child('path')` the engine is signaled that some path is needed.  It will immediately return a loading symbol, and then once resolved will send down the full path, or an error indicating that the requested path does not exist.
Ejection from the cache should be allowed for anything that hasn't had the `child(path)` call made in a while.  If something is evicted prematurely, the UI render should call it to load again.
In this way, the GUI could drive the engine to fetch whatever it can.  

This format can be used for data from any source - if we choose to do some presentational logic that is computationally heavy in a worker thread, then this same interface can be used to express to the user that the data is still loading, and allow the results to stream in with corresponding partial changes to the UI.  This generalized data interface need not be blockchain only.

### Past data
If a GUI component requires data from the past, how should it request this ?
Could supply options like `onLoadPath( path, -5)` to get the item 5 back from current along the current main path. 

The creation function should be able to use structural sharing with latest or any other, since it will be referenced by hash.  So an object representing a past snapshot of the [[App Complex]] should take up only the diff space.  Fetching should only take as long as fetching the diffs too.

Some parts of the app should have these diffs preloaded always, rather than being treated like onDemand data.

### Passing Actions
Each React component could recieve as props: `{ state, network, actions }` where the actions object contains functions which cause a dispatch to the shell.  Actions could contain the schema, so that a UI can be built for those actions.

Actions is spread from above, so children get given their parents actions, scoped to their current directory.  If a child covenant overrides a parents actions, then

Actions that are not meant to be passed down should be indicated somehow.

Actions have a `.schema` key attached, so that schema forms can be provided for actions that require params.

May make a dedicated action params modal pop up when about to execute, rather than getting a form filled in first.

### Generating mock data from covenants
The Complex object for the CRM was handcrafted.  What should be happening is that the covenant should be used to generate mock data using fakerjs.  Params for a specific path can be supplied, such as number of fake children to generate for a collection at a given path, how many edits to run so that history can be populated.  

This generated data should be able to write to disk, for rapid call up.

When loaded, it should be schema checked against the app covenant for correctness.

### Calling back to the engine
Pass down a stripped down version of the engine to perform:
1. `dispatch`
2. `cd`
3. 

### Wrap all components in a switcher
Build all components in isolation, then make a wrapper that processes the root element into what the children should receive, rather than that being the responsibility of any higher component.

### Displaying customers
They can be navigated to from both the collection and from Routing.  In routing there is no path, so the display would be a component entirely controlled by the routing component.

It would walk across the tree and fetch as much of the customer data as was present, then display this in a modal or overlay page





### Remote shell control

### Proxying commands
Eg: making settings datum have controls to execute an [[Accounting System]] sync.  It would have reference to the chain that holds this covenant, and it would import its api, then reroute the actions it receives.

### Pass down the root object
Any component that needs to pull in info from elsewhere can do so in this fashion.  Eg: the routing component has only references to customerIds, so it can lookup the root for these names.

## Implementation



### Alternatives
A proxy function to log what paths were getting read during renders, and prune the state.

Covenant and UI together in the storybook