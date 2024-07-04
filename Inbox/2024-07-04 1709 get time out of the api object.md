
>[!tip] Created: [2024-07-04 Thu 17:09]

>[!question] Targets: 

>[!danger] Depends: 

later we can override the environment vars, but for now we would just use the api object, and store this request in the accumulator, so when it got asked for again, we give the exact same result.

This would be a sync call, as no promise needs to be given.

Time is always set at the start of the execution.

We could increment by 1ms each call, to ensure things were moving forwards all the time.
Throw if they ask for too much time.

Also they can ask for randomness in this same way.
We should only allow crypto grade randomness, and we will produce it each time for them.  It is stored so be careful with it.