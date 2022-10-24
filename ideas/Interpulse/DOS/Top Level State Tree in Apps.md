>[!tip] Created: [2022-10-21 Fri 13:34]

>[!question] Targets: 

>[!danger] Depends: 

Building a GUI application in react is best done as props passed down from the top.
Fundamentally a Reactive GUI application represents a snapshot of state, even tho that state may have been assembled from present and past state.  And so, the engine would build and maintain a large object that gets dropped down via props, 

The UI data binding can specify what type of sync it would like for different paths in the app, such as collections being fully synced, or on demand, permitting lazy load apps.

A recursive structure is defined here, which can be used to render a reactive GUI application as a surface to the chain tree underneath.

A mapping between covenants and components, and between paths and components is shown.  This lets UIs be composed by unit tested components, which are laid out based on the chain structure.  

## Format

`{ state, network, actions, isLoading, wd, tree }`

### `state`
This is the json state of the chain.

### `network`
The recursion point.  This is an array, in chain order, of all the network elements of this chain.
eg: `[{ path, type, state, network, actions, isLoading`

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



### Past data
If a GUI component requires data from the past, how should it request this ?
Could supply options like `onLoadPath( path, -5)` to get the item 5 back from current along the current main path. 

### Passing Actions
Each React component could recieve as props: `{ state, network, actions }` where the actions object contains functions which cause a dispatch to the shell.  Actions could contain the schema, so that a UI can be built for those actions.

Actions is spread from above, so children get given their parents actions, scoped to their current directory.  If a child covenant overrides a parents actions, then

Actions that are not meant to be passed down should be indicated somehow.

Actions have a `.schema` key attached, so that schema forms can be provided for actions that require params.

May make a dedicated action params modal pop up when about to execute, rather than getting a form filled in first.

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