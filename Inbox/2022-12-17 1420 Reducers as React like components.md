
>[!tip] Created: [2022-12-17 Sat 14:20]

>[!question] Targets: 

>[!danger] Depends: 

Treat running on a host computer like the DOM being mounted and mutated.  The host can represent multiple computers, so whenever it gets mounted on a new set of hosts, the effect unmounts.

`useEffect( () => {}, [state, state.something] )`

Each time any part of the state changes, the hooks rerun.  Any time the computer that we are running on changes, or the chain is stopped, the cleanup code runs and the hook is shutdown.

Effects are always tied to a computer or group of computers that they run on, so the effect model is a good match.

The effects could be run on a long running container, or the reducer itself could keep running and process multiple actions if more came in while it was running.  Effects could run on separate containers to the rest of the logic, since calling the callback is entirely at the executioners whim.

Effects can run on a single nominated computer, and might be unmounted at any time.

If something like `setState()` is called from within an effect, this would generate an action, and so would be subject to consensus.