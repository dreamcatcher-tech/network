
>[!tip] Created: [2025-08-17 Sun 20:54]

>[!question] Targets: 

>[!danger] Depends: 

if an mcp server that can do dynamic discovery then calls another one that can do the same ?

So if we have our own dynamic discovery tool, but then another provider like github provides a dynamic discovery tool, how does that work ?

So our tool would switch out to add the other tools dynamic tooling.
then that tooling would need hooks into the running mcp server, which should be allowed, and then it would add and remove tool listings.

But it wouldn't do the displacement that we would do, and next time our tooling is called, it would wipe all the dynamic tools.

So it would work, but it is best to break the tool up and use our own discovery to select its tools directly, since our discovery systems are richer.