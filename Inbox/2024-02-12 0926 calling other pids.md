
>[!tip] Created: [2024-02-12 Mon 09:26]

>[!question] Targets: 

>[!danger] Depends: 

Especially loopback.

This would be something in the api that has a system level hook into the pool.
Inside the cradle, then calls to this dispatcher would go straight back in to artifact, which means they would get routed once inside artifact.

Unless incoming dispatches for any chain when via the api hook anyway ?
Dispatch into the cradle with an arbitrary PID would do what ?

If we for now overload the queue, and call direct into artifact functions, like process serialize, this at least gets us moving, where a more succinct path may present later.


We could make a web call out to an isolate rather than a kv queue, since it is cheaper, possibly scales better as the queue ramp is optimized for factors other than pure response time, resulting in some sluggish ramp ups some times.

But it is only ever shifting the pure userland isolate load.

So if we box the isolate runner as something that could be web based on queue based, then treat it as a component, we can upgrade over time.

Easiest to build right now is pure queue based.

Bot talking to bot requires IPC.  So the address of the PID points to the pool of the branch.

Wrap the dispatch action from artifact differently ?
Api should collect the actions and then the executor would decide what to do with them at the end.  So running inside artifact would accumulate these actions and then artifact would figure out how to process them.  In its own processing workflow, it would accumulate actions into its own api collector, and the cradle would figure out what to do with them.

Artifact should never talk to other chains directly ?
But what about getting other chains to talk directly to it ?

Problem is that a dispatch action is multiple types, but the qmessage type is much simpler.
So we could convert the dispatch action into function calls that are matched in the artifact isolate ?