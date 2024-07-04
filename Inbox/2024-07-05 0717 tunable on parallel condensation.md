
>[!tip] Created: [2024-07-05 Fri 07:17]

>[!question] Targets: 

>[!danger] Depends: 

If there are linear set of steps, then we should do them in the same isolate to avoid the queu being used.

Also we should detect at each step if we have already run.

But also when doing parallel ops, we should have a tunable where doing some of these makes more sense to do in a single isolate than to use the queue, but then be able to call on the queue at any point.