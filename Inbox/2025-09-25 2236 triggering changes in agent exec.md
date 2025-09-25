
>[!tip] Created: [2025-09-25 Thu 22:36]

>[!question] Targets: 

>[!danger] Depends: 

we need to trigger exec when the filesystem has changed.

two options:
1. install a watcher on the nfs server and broadcast events to listeners
2. have the writers ping those they want to receive with the location of their changes, to ensure they get looked at

in the current pattern, router would never need to receive notifications, since it already reads from disk each request that comes in.

it also has to ping the exec app to wake up, so the changes it makes could easily be sent over.
it might as well read the whole computer, since that's cheap.

agents creating new agents would just do the same - write to nfs, notify the exec.

if it notified exactly, that might be delayed, so full computer is best.

but then the requester needs to know the machine id when the machine is ready.
so it could just poll the nfs server until it got what it needed ?



