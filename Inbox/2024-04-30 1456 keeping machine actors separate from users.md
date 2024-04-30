
>[!tip] Created: [2024-04-30 Tue 14:56]

>[!question] Targets: 

>[!danger] Depends: 

If the home app treated all machineIds as their own entity, and it was HAL that made temporary sessions, might be simpler and achieve the same results.

Hal, to see what user this is, would get the pubkey of the machine, then read from the github repo to see what user this belongs to.  If nothing, then it treats it as a user named after the machine.

Each prompt, the status of the machine key is checked.
If the machinekey is deauthed and this is an authed users session, it is denied.
The session continues, but only authed machines can access it.

If a hal session explicitly adds permission for a machine key / user id, then this gives it access, and it can be read, write, and could be limited to children or not, as well as starting at a certain commit, or nothing earlier than when the permission was granted.

So permissions is uniform thruout the system ?

This permissions check should be done at the system level causing no executions unless auth is allowed.

auth providers present a standard interface that the system can read from, and the io config gives a PID of the auth provider to use.

If the machine pubkey is part of the pid, then we can immediately know that it is valid or not without an extra read step.