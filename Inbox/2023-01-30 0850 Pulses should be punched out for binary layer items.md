
>[!tip] Created: [2023-01-30 Mon 08:50]

>[!question] Targets: 

>[!danger] Depends: 

`usePulse()` currently works only within a single pulse boundary.
It should be made generally available, which means it needs to handle replays.
If a pulse is sent back as a reply, then we should send it in as the binary layer.
Then to access it, the caller needs to inflate the pulse the same way they inflate binary items.

Binary inflation needs to be content aware, so that fine grained rules on the inflation can be applied, to allow working with very large data and not drowning.

Another temporary tactic is to read from the pulse in a separate reducer action, by using loopback to request something from yourself, extract the required pulse info, then send it back, avoiding the need to reinflate and reprocess the pulse.
