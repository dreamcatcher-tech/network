Components like Datum and Collection have a significant visual aspect to them.

We should separate out visual props and wrap the visual components with the data components.

The Data components are slow to test in the browser, since they require a full application to load.  We might test these by using persisted versions of what the app state would be.

Effectively we would have an interface between the engine and the react data components, then an interface between the data components and the visual components.

Could the data components be used in the command line using something like [ink](https://www.npmjs.com/package/ink) ?