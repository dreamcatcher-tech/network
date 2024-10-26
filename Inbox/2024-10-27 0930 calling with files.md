
>[!tip] Created: [2024-10-27 Sun 09:30]

>[!question] Targets: 

>[!danger] Depends: 

When a compartment executes, we may sometimes pass in a filesystem that is mutated.

When the compartment has finished, we may choose to persist this fs in a git commit.

So the invocation of a napp is json object in, plus an optional filesystem api.  While running, the function can do anything it likes to the local filesystem, and if enabled can have access to remote filesystems via the api.

If enabled, can have options to file history functions, and process controls like child branches.  These would be the permissions settings.

We need this base component first, before we build anything else.

? Remote api access ? 

Gathing the api and check it should be independent of the compartment.
It should be derived entirely from the napp api that is presented.
Types for this can be imported from the napp, but this again should be separate from the compartment

Using this method, we don't care if we are being called locally, or over the web, or on a blockchain.

But now the addressing system of the blockchain, with PIDs, has gotten in the way.
PIDs should not really be inside of any napp unless it needs to know about remote chain access.
So the stance of all napp functions should be unaware of what a PID is.