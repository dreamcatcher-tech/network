
>[!tip] Created: [2025-08-17 Sun 10:50]

>[!question] Targets: 

>[!danger] Depends: 

they have distinct urls for mcp servers that provide readonly views.
our commands are separated into readonly and readwrite groups, so we should do the same.

so they treat the toolsets the same, but if you say readonly then they come in as readonly.

toolsets should be recursively mountable, so you can get them all, like the readwrite and the readonly set together, since only the write commands without the read is pointless.

toolsets should be able to include other toolsets as part of their required toolset, so like how napps can specificy other napps to be part of their surface area.

but napps should also be able to 

If a mcapp is marked side effect free, then it can be run in a blockchain way.  Sideeffect free still allows basics like time, and randomness, but excludes network.

if the mcapp uses explicit calls to the network mcp server, then it can still be treated as side effect free.

side effect free means its good to give to agents with lax permissions too, particularly if it is readonly.

the basic filesystem permissions should be declared in the mcapp too.

we could make enable have a toggle that can be set by setting the tool config, which is exposed as a resource, so it can allow tools to keep getting loaded, rather than a compulsory drop ?

We sould allow several toolsets to be loaded at once.

we must have a list function.

basically any time there is a register* call on the server code, then we should make that part of the mcapp config.

@mount or other options might be able to tune what resources come available ? but this seems a bit too confusing.
Mount options like readonly or with children ?