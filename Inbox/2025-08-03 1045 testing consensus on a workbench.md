
>[!tip] Created: [2025-08-03 Sun 10:45]

>[!question] Targets: 

>[!danger] Depends: 

if all the algos are written as pure functions that take in a state container and the next message, and return back the next state container and the outbound messages, then we can fuzz the algo.

we should make tla+ models as the base of this, and then express all algos as tla+ models in this framework.   then we implement.

this means that, for us to have pluggable consensus, the algos need to be selected in this way.

any time a new fault is proposed, we should be able to use the ai models to respond very quickly to it.