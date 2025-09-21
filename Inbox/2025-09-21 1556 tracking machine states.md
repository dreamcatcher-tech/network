
>[!tip] Created: [2025-09-21 Sun 15:56]

>[!question] Targets: 

>[!danger] Depends: 

if the agent maps to a machine by fly id, then we don't know if we assigned the job multiple times.

we should have a folder that lists the machines the computer is using directly, and then we treat that as the canonical state of the system.

watchdogs and other things keep that working right.

the agents point back to these items but have a two way link.

this is where we need a git commit, to ensure there is no race condition between assignments.

use machines.lock to ensure you are the only process writing to the machines directory.
then we have some pooled machines, and some other machines.

run the reconcile process, which goes thru and tries to make sure the config state matches the hardware state ? or do a read process that pulls in the current hardware state.