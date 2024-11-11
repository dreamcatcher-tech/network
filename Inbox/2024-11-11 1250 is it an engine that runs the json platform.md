
>[!tip] Created: [2024-11-11 Mon 12:50]

>[!question] Targets: 

>[!danger] Depends: 

That is is our blockchain or not should only depend on the napp, now the execution environment.

A host would be simply something that starts up, and holds a particular napp upon it.

? how would new napps be added in ?

So to start running a napp, we would pass it in a napp, and let it start up ?

But the thing that holds the napps and the db connections seems different ?

The cradle should pull in the db connections, shockwave as the scaler, git as the snapshot provider.

Then it is also given a napp to start running, as tho that is the installed thing.

Is execution an interface, or is it dependent on the objects we pass in ?

What the engine does is to ensure persistent running of a napp, whereas a compartment does simple running.

Compartment runs a single thread to exhaustion, but the transmissions are also required to keep the whole system moving forwards.

Compartment takes a trail, then executes a napps functions.

It should boot, then be injected with something that seals it and reserves its usage for only the root user.

## Using the trail as a way of tracking promise state and controlling execution
Only thing wrong with it, is the compartment's attachment to it as a signalling system.