
>[!tip] Created: [2024-04-17 Wed 17:00]

>[!question] Targets: 

>[!danger] Depends: 

We will always be beholden to the shape of deno deploy elasticity.

How can this be mapped and measured ?
How can we know when we are on a new isolate ?



Making built in multipliers for request ramp up.
A new type of queue message that is atomically run, which writes a marker for each boost message, then sends a queue message, which deletes it and does the queue amplification.

So the programmer never has to worry about ramp up, they can just do huge numbers of things in parallel, then the system does the boosting automatically for them.

? are large broadcasts slowing down the system ?