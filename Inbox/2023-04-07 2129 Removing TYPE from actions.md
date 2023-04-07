
>[!tip] Created: [2023-04-07 Fri 21:29]

>[!question] Targets: 

>[!danger] Depends: 

If actions and replies were simply treated as json objects, and enveloped into system wrappers, then what type there should be totally independent of the system level interactions.

`TYPE` is used by the system functions like the dmz reducer, but this is more just a convention and should not be enforced at all.

Then, all replies can follow closer to the iterator protocol, and always send back a `value` key in the payload, as well as some extra system typing information, like if it was an error or not.

Basically following the iterator protocol directly seems the best and cleanest route for the protocol, and we can lean on the definitions of the work, which is implemented across almost all languages.

So our model becomes then:

> JSON in, JSON back with optional error flag, and optional JSON next state.

With binary attachments:

> Binary in, Binary back with optional error flag, and optional Binary next state.

