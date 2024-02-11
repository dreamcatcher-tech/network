
>[!tip] Created: [2024-02-12 Mon 09:26]

>[!question] Targets: 

>[!danger] Depends: 

Especially loopback.

This would be something in the api that has a system level hook into the pool.
Inside the cradle, then calls to this dispatcher would only 

Unless incoming dispatches for any chain when via the api hook anyway ?
Dispatch into the cradle with an arbitrary PID would do what ?

If we for now overload the queue, and call direct 


We could make a web call out to an isolate rather than a kv queue, since it is cheaper, possibly scales better as the queue ramp is optimized for factors other than pure response time, resulting in some sluggish ramp ups some times.

But it is only ever shifting the pure userland isolate load.

So if we box the isolate runner as something that could be web based on queue based, then treat it as a component, we can upgrade over time.

Easiest to build right now is pure queue based.

Bot talking to bot requires IPC.  So the address of the PID points to the pool of the branch.