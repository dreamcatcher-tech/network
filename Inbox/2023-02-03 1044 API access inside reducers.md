
>[!tip] Created: [2023-02-03 Fri 10:44]

>[!question] Targets: 

>[!danger] Depends: 

The shell commands are useful outside the reducer, but inside the reducer we want them as well.

Can the shell be loaded up inside each reducer and used as tho it was the root ?

Like a shell adapter that can wrap its actions and intercept their replies ?

```js
async request => {
	const { children } = await shell.ls('.')
	
}
```

Would wrap up the shell api using raw interchain, not the 

Shell factory `shellFact( dispatcher )`

? What if shell itself was accessible directly inside all reducers ?
So in the reducer, you can immediately talk to your root ?

How to break execution loop with an action, but then intercept that action so that it does not get passed to the main reducer ?
`await useLineBreaker()` so that
or `await useLineBreaker( function anotherReducer(){} )`  so we can break out of the current async trail and use things like pulses without getting them stuck on the asynctrail.
Or allow pulses on the asynctrail and then not care ?

Sounds like a `useEffect` type of hook, where we supply a function and an action, and ask the context to execute it for us.

Then, using the engine externally, all these same methods should be exposed on the engine object, so that sugar like [[2023-02-03 1142 useDatum convenience methods |useDatum()]] can be called with `engine.useDatum()` - basically the full API of the engine should be available both inside reducers, and outside in the engine.  
Needs to make writing code that consumes the engine feel the same as writing code inside a reducer - there should be no difference.

Be able to use shall commands from within the shell reducer itself.

May be as simple as wrapping the dmzReducer api:
```js
const api = createDmzApi( '/path/to/remote' )
const result = await api.spawn( 'someChildName' )
```
Where the schemaToFunctions object is wrapped with interchain dispatch to the provided path.
So if the shell was made to be just a thin wrapper around the system api, we can provide this standard interface whether in or out of the chain.
Outside the engine, api calls would be prefixed with the `wd` to give relative pathing.