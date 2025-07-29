
>[!tip] Created: [2025-07-30 Wed 09:44]

>[!question] Targets: 

>[!danger] Depends: 

its like we need to provide our own transport implementation, that uses only artifact methods, which is used from within chains.

makes mcp repeatable, and also connectionless, since it is action based.

by making a restricted type of transport, we can let the napps call other napps using mcp.

in the first case, where the base mcp server operates, it would convert external mcp connection into internal mcp.

? what are the requirements for the mcp protocol to be tunnelable ?