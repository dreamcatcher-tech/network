
>[!tip] Created: [2022-12-17 Sat 14:20]

>[!question] Targets: 

>[!danger] Depends: 

Treat running on a host computer like the DOM being mounted and mutated.  The host can represent multiple computers, so whenever it gets mounted on a new set of hosts, the effect unmounts.

`useEffect( () => {}, [state, state.something], {options} )`

Options are things like concurrent execution, max running time, network access granted, filesystem path access granted, and other isolation options.  Effects cannot influence the block that triggers them.  The effect is run by rerunning the reducer with the same params that triggered the effect, 

Each time any part of the state changes, the hooks rerun.  Any time the computer that we are running on changes, or the chain is stopped, the cleanup code runs and the hook is shutdown.

Effects are always tied to a computer or group of computers that they run on, so the effect model is a good match.

The effects could be run on a long running container, or the reducer itself could keep running and process multiple actions if more came in while it was running.  Effects could run on separate containers to the rest of the logic, since calling the callback is entirely at the executioners whim.

Effects can run on a single nominated computer, and might be unmounted at any time.

If something like `setState()` is called from within an effect, this would generate an action, and so would be subject to consensus.

Effects can be recorded by using the IO channel.  A wrapper action can be constructed that indicates the call count of the `useEffect` call, 

Each action is like props being passed down, which will cause a rerender, which might trigger effects to rerun.  The covenant model is very much like a react component that takes props in and expects props back, and has various lifecycle events that it transitions to.  It does allow asynchrony, unlike react.

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