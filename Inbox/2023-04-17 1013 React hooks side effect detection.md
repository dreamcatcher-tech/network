
>[!tip] Created: [2023-04-17 Mon 10:13]

>[!question] Targets: 

>[!danger] Depends: 

When a new action comes in, we compare the deps provided to the hooks call with the stored deps from the last run (if anything) and decide if we want to run the hook again.

Deep equality with the stored dependencies.  Be careful with these deps as they need to be stored in the state.  You can hash them if they are large and just store a hash.  Or use just the slice of a large object which you depend on, to minimize the state change of the chain.

If the hook depends on the state in some way, then it would have passed that portion of the state into the hook as a dep, so state change detection is inferred.

```js
useEffect( ()=>{}, [dep1, dep2, ...], { concurrency: 5, spread: 3, quorum: 'MAJORITY', timeout: 50000 })
```

Effects can have properties:
### Concurrency
How many engines should this effect run on concurrently ?  If this number is greater than the number of engines, then concurrency is limited to the number of engines.

### Spread
How frequently should the effect be spread around the engines participating in this chain.

### Quorum model
When the results of the effect which was run concurrently come in, 

## Problems
How can future requests interact with the running request in some way ?
In React, this is provided thru `useRef()` to get something mutable.  This is generally discouraged.