
>[!tip] Created: [2022-12-17 Sat 14:20]

>[!question] Targets: [[Interpulse Blockchain]]

>[!danger] Depends: 

Interpulse Effects are always tied to a computer or group of computers that they run on, so the effect model is a good match if we treat running on a host computer like the DOM being mounted and mutated.  The host can represent multiple computers, so whenever it gets mounted on a new set of hosts, the effect unmounts first.  

Each action is like props being passed down, which will cause a rerender, which might trigger effects to rerun.  The covenant model is very much like a react component that takes props in and expects props back, and has various lifecycle events that it transitions to.  It does allow asynchrony, unlike react.

Unmount can occur at any time for any reason.  The only thing that is guaranteed is that the effect will always eventually run based on the latest known block.  Some executions that would occur during replay may be skipped, so the effect is not guaranteed to execute at every Pulse that it could execute, but it will always eventually execute.  

The isolation context may need to teardown before execution completes, in which case the exact same function will be invoked on another isolator somewhere.

The signature is:

```js
const dependencies = [state, state.something, anyVariable]
const options = { concurrency: 5, spread: 3, quorum: 'MAJORITY', timeout: 50000, host: 'peerId' }
useEffect( () => {
	debug('effect mounting')
	const asyncFunction = async ()=>{
		const result = await fetch('https://some.thing')
		const loopbackResult = await interchain( 'SELF', result )
		const [state, setState] = await useState()
		// note this is only the state at time of invocation
		await setState( {} )
	}
	asyncFunction()
	return () => {
		// must return a function so we know how to cleanup
		debug('effect unmounting')
	}
}, dependencies , options )
```

Dependencies are stored as json on the Pulse, and when a change is detected, the cleanup code runs and the hook is shutdown.  Each hook execution request is given an integer counter, so that any single Pulse has enough information for the isolator to know if it should teardown or not.  Be aware that the hook may remount in the same context, so cleanup must be done correctly by the developer.

Options are things like concurrent execution, max running time, network access granted, filesystem path access granted, and other isolation options.  Effects cannot influence the block that triggers them.  The effect is run by rerunning the reducer with the same params that triggered the effect, but in a different isolation context.

The order of invocation for multiple `useEffect` calls in a reducer are recorded, so that they order is always the same.  Actions coming out of the effect function are wrapped and pierced back into the chain.  If something like `setState()` is called from within an effect, this would generate an action, and so would be subject to consensus, after unwrapping.

In essence, the side effects are reacting to state changes, and sometimes they pierce actions into the chain based on what happened in the side effect.

### Lifecycle of a reducer
When a reducer first mounts on a cluster, it is run with an empty action.  This allows the logic to do any setup work it may wish.  The effect is triggered AFTER the Pulse has been sealed, using the same action that triggered it to be called.  Any calls to `useState` would have been fulfilled in the same way as the trail would have stored these calls.  On rerun to induce the effect, all subsequent async requests from that reducer are ignored - only requests from the running effect functions are used.

## Treating the world as the isolation boundary
If we run a specific side effect with no containment, then the programming interface may feel like it is running in isolation, but its context is actually the whole machine that it is running on.  In this way we can run any function, like write a file to the disk at the users requested location.

In the Engine model, the user is modelled as a side effect function that cannot receive any actions.

## `useRef()`
Often we want some piece of mutable data to last longer than just the current side effect - we want it for the life of the effect context.  Here we can provide a hook into some part of the isolation boundary that is consistently available.  This could be used to store a `libp2p` instance in the case of the network, or it could be used to allow multiple concurrently running effects in the same reducer to communicate directly with each other.

Under the hood this simply takes the `globalThis` for the isolation context, upserts and object representing the call order of this invocation of `useRef()`, and returns that object.

A similar way to achieve the same result is to use a variable that is outside of the reducer function, so that it is effectively part of the `globalThis` of the isolation context, but useRef is more explicit and cleaner way to do this.

useRef is a hole out into the isolation context.

## `useRef()` during replay
Sometimes we need to keep some piece of context around that was generated inside a side effect, such as a handle on a network card.  This is difficult to replay as the context is entirely a side effect. To solve this and allow replay we could cause all `useRef()` access in a proxy, so that any interactions with this ref would be logged and so a validator could replay the chain without having the side effect context.  This proxy behaviour could be turned off in the options for the effect, if performance matters more than replay.

Reply could just avoid all side effect running altogether, as all side effect interation would have come back thru

## Pierce as a side effect
The base of the engine could be rewritten to make piercing be merely a side effect inside the covenant, and nothing more.  Models the user as a side effect that is injecting actions into the chain, then getting responses.  In this way, it seems that the `.@@io` channel never ever needs to send any request out, and only sends out replies.  If it wanted to send something out, it would be by directly using some functions running in a side effect.  So when the chain wants to talk out to side effect land, it would do so directly.  If the IO output needed to be part of consensus this would have been handled already before the effect ran.

## Remounting
in React 18, in dev mode, effects are remounted, just to check they clean up approriately.  We should do the same with our effects in dev mode.

## Side Effect Dependencies
When a new action comes in, we compare the deps provided to the hooks call with the stored deps from the last run (if anything) and decide if we want to run the hook again.

Deep equality is used with the stored dependencies.  Be careful with these deps as they need to be stored in the state and will contribute to Pulse size.  You can hash them if they are large and just store a hash.  Or use just the slice of a large object which you depend on, to minimize the state change of the chain.

We should store just the hash of the dependencies, since it has guaranteed storage size, and serves the exact same purpose.

If the hook depends on the state in some way, then it would have passed that portion of the state into the hook as a dep, so state change detection is inferred.

### Concurrency
How many engines should this effect run on concurrently ?  If this number is greater than the number of engines, then concurrency is limited to the number of engines.  Covered by [[Swarm side effects]]

### Spread
How frequently should the effect be spread around the engines participating in this chain.  If each execution should be on a different engine, then the hosts should coordinate and agree to only run it once before passing on.

### Quorum model
When the results of the effect which was run concurrently come in, we can put these into a proxy chain, which does the quorum calculations and somehow puts the summary result back into the chain.  Is covered by [[Swarm side effects]]

## Skipping ahead
If the pulsemaker produces pulses that require side effects to run faster than the effector can unmount and remount the side effects, the effector will always skip ahead.

## Communicating out
From within an effect, we might need to communicate to other chains, including our own loopback interface:

```js
const result = await interchain( action, '/some/other/chain' )
```

Within the effect runner, which is an engine controlled context, any interchain requests would be inserted on the `.@@io` queue, wrapped in a system action, which the DMZ marshals.  By the same rules as hooks, a promise cannot be returned from `useEffect()` so dangling requests during unmount need to be handled by the developer.  

The Pierce channel is the only way to get data into chainland.  
The effect model described here has no reason to use the outbound channel of `@@.io` and so it is likely to be removed upon implementation of this new side effect model.  The hooks model allows effect functions to be supplied inside the reducer function, so can simplify covenant structure.

Any actions the effect needs to dispatch are wrapped, pierced into the chain, then unwrapped by the dmz reducer.

## Witness replay
When witnessing a chain, the effects would be ignored, since the pierced actions that come in from effects are unable to be reconstructed deterministically, and are treated as assertions by the isolators that pierced them in.

## Reusing Reacts AST parser
React detects misuse of hooks very well - we might be able to use this exact same logic to do things like check all dependencies are named, and all the other helpful checks they do.

## Translation to other languages
Not all languages can pass functions as parameters.  These might need to pass an object with a function on it with some name convention.

## Example: Engine Networking
In the browser and nodejs single instance engines, a side effect starts up the libp2p instance.  This would be kept around for the lifetime of the execution context:
```js
const [state, setState] = await useState()
const ref = useRef()
useEffect( ()=>{
	let stopped = false
	const start = async ()=> {
		assert(!ref.current)
		ref.current = await PulseNet.create()
		if (!stopped){
			await setState( state => ({...state, started: true}))
		}
	}
	start()
	return () => { // called when the isolation context is being torn down
		stopped = true
		ref.current?.stop().then(() => debug('libp2p stopped'))
	}
}, [] )
useEffect(()=>{
	if (!ref.current){
		return
	}
	for await (const announcement of ref.current.subscribeInterpulses()) {
		// process announces possibly as actions into this chain
	}
}, [state.started] )
```

So the entire host should be a single covenant that includes some side effects that expect to boot up with network level access.  The network covenant could detect if it is inside a chain or a computer, and act accordingly, which would be useful for testing and replay purposes.  Provide some introspection utils, where you can know what isolation privileges you have, then use the chain version of libp2p or the bare metal version.

The isolation context would be the thing that ran this core covenant.  It would be told to load up the covenant which it would have had to source and reify somehow on its own, probably from disk the same as a dev mode covenant, possibly with some integrity checking for each file, then it would execute the init action, which should be enough for the covenant to start up all its side effects, and detect its previous saved data on disk at the path given to it.

Init action includes a path to the repo to draw on.  

After it had booted, it would check with the network that the hashes it had loaded from were in fact correct ?  If was loaded in deno, then the hash that came with the files would be enough to ensure the integrity of the loaded files.  