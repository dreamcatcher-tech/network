
>[!tip] Created: [2025-08-07 Thu 11:01]

>[!question] Targets: 

>[!danger] Depends: 

in order that the first running instance can spawn other instances, we need some simple operations.
1. createMachine - this will create a unit with the machine types being defined in schema, available hosts in schema
2. destroyMachine - destroy by machine id

the machines cannot be moved to different hosts once they're operating, and we don't want to change ip addresses or any config - they are considered immuatable, and we would create new ones then delete old ones if we need to change config.

The machines boot with a standard image.  They can be set up with different images, but the images are all standard.

when they boot, they receive commands from the repo that triggered their creation.

From this, we should be able to load up any type of config we want ?
stats and sampling can be added on the side ?

its basically presenting a hosting provider as an mcp server.
then we can use these hosting providers to spin up real hardware, and run consensus over the top to smooth out unreliability.  Consensus is the only way to make unreliable / real hardware be reliable.