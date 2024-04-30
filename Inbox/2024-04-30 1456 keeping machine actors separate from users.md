
>[!tip] Created: [2024-04-30 Tue 14:56]

>[!question] Targets: 

>[!danger] Depends: 

If the home app treated all machineIds as their own entity, and it was HAL that made temporary sessions, might be simpler and achieve the same results.

Hal, to see what user this is, would get the pubkey of the machine, then read from the github repo to see what user this belongs to.  If nothing, then it treats it as a user named after the machine.

Each prompt, the status of the machine key is checked.
If the machinekey is deauthed and this is an authed users session, it is denied.
