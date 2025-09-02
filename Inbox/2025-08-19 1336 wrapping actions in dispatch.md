
>[!tip] Created: [2025-08-19 Tue 13:36]

>[!question] Targets: 

>[!danger] Depends: 

could this be removed, and we could dispatch into a native container directly ?

but without updispatch, we cannot get back to system ?

unless all containers were started with system injected ?

So we could call container.down() and pass in the action we were going to send anyway ?
but this seems about the same as calling one of the providers ?

we still need to keep system interactions as actions, so they can cross isolation boundaries.