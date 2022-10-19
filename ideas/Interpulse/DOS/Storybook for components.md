Components like Datum and Collection have a significant visual aspect to them.

We should separate out visual props and wrap the visual components with the data components.

The Data components are slow to test in the browser, since they require a full application to load.  We might test these by using persisted versions of what the app state would be.

Effectively we would have an interface between the engine and the react data components, then an interface between the data components and the visual components.

Could the data components be used in the command line using something like [ink](https://www.npmjs.com/package/ink) ?  Could make streaming data for long lists of children, where the data is pulled in from remote sources.  So long as ordering and filtering was able to be updated as new info arrives, we can show this data as it gets formed, rather than waiting until it is complete.

Development of the application logic would be done in command line only, using a localling installed version of the covenant, then the UI would be tested using storybook and a defined props interface.

## Streaming data
If the hooks for the chains returned data in chunks, then different hooks could be used to accumulate this data and present fully.  Getting an integration with virtualized lists and tables would be the best possible user experience.  Problem is that the summation would need to use [ImmutableJS](https://immutable-js.com/) since large sets would become slow to generate new spread objects for.  

We could use a plain array for the returned summation objects, since spreading an array of arbitrary size is instant.

## Data layer
Can make tests for the hooks like `usePathStream()` that is focused strictly on testing them in storybook.  Currently testing involves simultaneous data and presentation tweaks, which is hard to lock each component down since they are not isolated.

A mock engine could be constructed and injected to be able to experiment with precise conditions.  Or we can preconfigure one using a covenant.

### Connecting to State
`connectStateToProps( path )`  to get the state of the pulse passed in as a prop to the component.
`connectChannelsToProps( path )` to get the network channels passed in as a prop to the component.  These should stream in as they are discovered, and cached.  If the channels list is too big for the heap, then we can impose limits, or can fetch using a window, or using some search parameters.  Could build an index or build in a bloom filter to the network object.

## Routing
The route components can be tested for their expected interfaces directly too.

## Testing
Ensuring the stories pass can be used as a testing framework for the UI, making it much easier to accept changes from others.