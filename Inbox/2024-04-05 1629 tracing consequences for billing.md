
>[!tip] Created: [2024-04-05 Fri 16:29]

>[!question] Targets: 

>[!danger] Depends: 

If the only actions allowed in were pierce, we could then attach billing to everything.
If it all came in thru session chains, then we could write the cost of the action, but also the balance remaining, and total since last marker, etc.

Long running effects could periodically flush their costs down ?
Daemons would do a keepalive commit, and then squash merge at the end, summing the costs.

Each session would have the client data

Otherwise would have identity bound up in the pierce actions themselves, requiring some kind of signing to identify.  Then, correlation and replay of the user is hard.

? Should the user chain be in the browser, then interchained to the server ?

Modelling the user as a single chain, that the server relays things in to.

Client first generates a session chain.

Each commit should include its costs.
A summary should be tracked using the sum() functions to ensure atomicity.
Queue duplication actions are not counted.