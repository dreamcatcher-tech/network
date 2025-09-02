
>[!tip] Created: [2025-09-02 Tue 12:32]

>[!question] Targets: 

>[!danger] Depends: 

we need an entry point, or a default command.

? how to extend the mcp tool list ?

? how to run this as the thing doing executions on the blockchain, being used as a faas, but with long running ability ?

if this was truly just the artifact execution container, then what would that mean for us ?

could everyone run exactly as before ?

except now, containers can be connected to externally ?

all comms between has to go thru artifact, which is a top level container.

the container control mcp.

all images carry the proxy ability, but only some use it / enable it.
all images carry the control mcp server.
all images carry the ttyd viewer ability.

it might be that the manifest config file specifies the entry point action, not the mcp control server.
then new views can call this entry command.