
>[!tip] Created: [2022-12-17 Sat 14:20]

>[!question] Targets: [[Interpulse Blockchain]]

>[!danger] Depends: 

Treat running on a host computer like the DOM being mounted and mutated.  The host can represent multiple computers, so whenever it gets mounted on a new set of hosts, the effect unmounts.

`useEffect( () => {}, [state, state.something], {options} )`

Options are things like concurrent execution, max running time, network access granted, filesystem path access granted, and other isolation options.  Effects cannot influence the block that triggers them.  The effect is run by rerunning the reducer with the same params that triggered the effect, but in a different isolation context.

Each time any part of the state changes, the hooks rerun.  Any time the computer that we are running on changes, or the chain is stopped, the cleanup code runs and the hook is shutdown.

Effects are always tied to a computer or group of computers that they run on, so the effect model is a good match.

The effects could be run on a long running container, or the reducer itself could keep running and process multiple actions if more came in while it was running.  Effects could run on separate containers to the rest of the logic, since calling the callback is entirely at the executioners whim.

Effects can run on a single nominated computer, and might be unmounted at any time.

If something like `setState()` is called from within an effect, this would generate an action, and so would be subject to consensus.

Effects can be recorded by using the IO channel.  A wrapper action can be constructed that indicates the call count of the `useEffect` call, 

Each action is like props being passed down, which will cause a rerender, which might trigger effects to rerun.  The covenant model is very much like a react component that takes props in and expects props back, and has various lifecycle events that it transitions to.  It does allow asynchrony, unlike react.

In the Engine model, the user is modelled as a side effect function that cannot receive any actions.

### Lifecycle of a reducer
When it first mounts on a cluster, it is run with an empty action.  This allows the logic to do any setup work it may wish.  The effect is triggered AFTER the block has been sealed, using the same action that triggered it to be called.  Any calls to `useState` would have been fulfilled in the same way as the trail would have stored these calls.  On rerun to induce the effect, all subsequent async requests from that reducer are ignored.  

### Starting effects
The params that triggered the effect must be the same when running it on an effect container as opposed to a reducer container.  Each effect run that goes onto the IO channel must include an action identifier so we can rerun with the exact 

### Calling `setState` within `useEffect`
If the state gets set, then an action will be sent that goes back down the IO channel.  Would be wrapped in the covenant runner, with no isolation, and so all interchain actions would be intercepted.  The difference is, these promises would be resolved eventually, since the effect is long running - the effect would never be rerun with the same data like a reducer is.

### Talking to other chains in an effect
This can be done by wrapping the request into something that goes into the IO channel, and sending it back into the chain for processing.  The system would unwrap this, make the remote request, and then return the result back to the IO channel for further processing by the effect.

## Treating the world as the isolation boundary
If we run a specific side effect with no containment, then the programming interface may feel like it is running in isolation, but its context is actually the whole machine that it is running on.  In this way we can run any function, like write a file to the disk at the users requested location.

But for testing, the same code can run in any context we provide it with.

## `useRef()`
Often we want some piece of mutable data to last longer than just the current side effect - we want it for the life of the effect context.  Here we can provide a hook into some part of the isolation boundary that is consistently available.  This could be used to store a `libp2p` instance in the case of the network.

## Outbound effects
These are controlled by the context level of the isolating container.

## Inbound effects
The Pierce channel is the only way to get data into chainland.
The effect model described here has no reason to use the outbound channel of `@@.io`

## Remounting
in React 18, in dev mode, effects are remounted, just to check they clean up approriately.  We should do the same with our effects.

## Side Effect Detection
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
When the results of the effect which was run concurrently come in, we can put these into a proxy chain, which does the quorum calculations and somehow puts the summary result back into the chain ?

## Side Effects
Plan is to provide a side effect function in a Covenant that has the same signature as a reducer, but is triggered by outgoing actions from the `.@@io` channel.  It would optionally have the ability to pierce back in to the chain by sending requests back in on the same channel.

In the Engine model, the user is modelled as a side effect function that cannot receive any actions.

## Teaming
Being able to reach consensus on side effects is a possible extension. There are two ways to provide this:
### Rerunning in consensus
Validators rerun the side effects and then pass the block if the same responses came back in from the side effect function.  This seems complicated and would require modifications to the consensus model to check for these operations
### Rollup to a higher chain
Run the side effects in multiple places, and then roll up the results into a pure chainland chain, doing quorum or other filter types on the provided raw side effects.

This is a much cleaner solution as side effects are treated as a singular instance running somewhere, and coordinated results are compared in a replayable and auditable fashion.

## Re-Running in a different isolation context
When run in blockmaking isolation, we could detect if side effects needed rerunning and store this as a flag on the Pulse.  This completed Pulse can then be rerun 

## Skipping ahead
If the pulsemaker produces pulses that require side effects to run faster than the effector can unmount and remount the side effects, the effector will always skip ahead.

## Communicating out
From within an effect, we might need to communicate to other chains, including our own loopback interface:

```js
const result = await interchain( action, '/some/other/chain' )
```

Within the effect runner, which is an engine controlled context, any interchain requests would be inserted on the `.@@io` queue, wrapped in a system action, which the DMZ marshals.  By the same rules as hooks, a promise cannot be returned from `useEffect()` so dangling requests during unmount need to be handled by the developer.


## Problems
How to log the state of the network in chain, for auditing purposes ?
How can future requests interact with the running request in some way ?
In React, this is provided thru `useRef()` to get something mutable.  This is generally discouraged.
Handle unmounting at any point ?
How would another language, like Python, be able to pass a function as a parameter ?  It might need to be an object with a function on it with a default name.

## Example: Engine Networking
In the browser and nodejs single instance engines, a side effect starts up the