>[!tip] Created: [2022-09-30 Fri 12:01]

>[!question] Targets: 

>[!danger] Depends: 

If all the subscriptions to pulses are async iterables, then this does not work well with React, which expects synchronous and pure functions.  Also HAMTs mean that looking up parts of a Pulse, such as the list of children, 

## `children = useChildren( pulse, filters )`
Walks a HAMT, which is async in nature, and as children are resovled, the returned object is updated using `setState`.  `children` is an object with keys being the child names.  `filters` is an array of regex filters to be used to skip some names.  We may optionally add a limit, for large HAMTs.


## `pulse = usePulseStream( engine, path )`
Provides a hook that updates with the next Pulse in a stream.  Under the hood this wraps an async interable subscription, and uses React's `useState` hook to trigger a re-render when a new value is received