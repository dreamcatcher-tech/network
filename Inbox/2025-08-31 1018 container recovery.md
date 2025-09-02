
>[!tip] Created: [2025-08-31 Sun 10:18]

>[!question] Targets: 

>[!danger] Depends: 

the state of containers is periodically stored into artifact.

if a container crashes, which should be very rare, then it would restart at the last checkpoint, which should be very little lost work of any kind.

can even replay the tui commands to get it into the right place.

the qualities of a good tui app are that it regularly stores its state so that it can be recovered regularly with no fidelity loss.  This makes the apps highly resilient.

expose its state via mcp resource so the host can snap it whenever it alters.