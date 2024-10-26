
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

So backchat becomes actually VERY thin, and simply reflects a set of napp apis that are joined together as a union napp, and then called on in varying ways to produce a frontend UI.

We always need an addressing system, which is external to the jsonfunction message.

Send a filesystem along with the actions.
This might be hashed, but it really would be just the datastructure equivalent of the git tree.
Means that when backchat sends attachements, it is really just sending files along with the jsonfunction.  this is taken as transient, and then passed into a long running persistent function.

Can include auth data in the action too.

? how should pierce watching change in the jsonfunction paradigm ?
Promise comes back saying when the action has been inserted into the system.
Result watching comes from receiving an execution id, which you want watch to get the results of.
Or you can walk the io.json file and get the reply out directly.

apiSchema becomes a way to generate action function types out of a napp package, which would be independent of the server.
This is fine in code land, since code requires publication of some kind, but just editing the napp.json does not require any code processes - can just take in the json file, and use ajv to include types.

FOR TYPES just make a simple wrapper that when given the function name, will infer the types exactly.  So for a remote api, it would just import that type of the mods export.  It would pull in the ajv schema, but would pull types from the default export.  Validation would be ajv based, since we cannot trust zod.   Or we could just trust zod, and rely on the serverside ?

Then the types are provided by mod.ts, and the runtime validation provided by either zod or ajv.


So mod needs to be limited to the napp functions, else since we are doing type inference, the code side might think it can call functions that the napp side cannot process, so the inside needs to look the same as the outside, to maintain code compatiblity.
