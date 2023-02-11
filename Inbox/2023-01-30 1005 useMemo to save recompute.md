
>[!tip] Created: [2023-01-30 Mon 10:05]

>[!question] Targets: 

>[!danger] Depends: 

If a long running calculation needs to be done by a reducer, and we know the reducer gets replayed each time an await is called, we can encapsulate results by calling another action that goes on loopback, so only the result of the computation is used.  These memoized actions can include calls out to other chains as well.

For example:
```js
const reducer = async (request) => {
  const { type, payload } = request
  switch (type) {
    case '_SECTORS': {
      const routing = await usePulse()
      return await routing.getNetwork().children.allKeys()
    }
    case 'UPDATE': {
      const sectors = await interchain('_SECTORS')
      // do stuff
      return 
    }
  }
}
```

This behavour can be wrapped in an api call to `useMemo( function, [deps] )`
Underneath, we send out a loopback action `@@MEMO` with some identifying info to get the function out of context.  Once the loopback action is processed, we run the function and return the result.
So long as the memo stays the same, each reducer rerun only the result of the function gets used.

This result can be reused between reducer calls, to save time.  Set the Request as a dependency to make it run every time the reducer is called.

Replaying would send out the same `@@MEMO` action and would have preloaded context the same way, so would work if we got paused before execution.

