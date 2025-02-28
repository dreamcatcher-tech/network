
>[!tip] Created: [2025-02-28 Fri 09:44]

>[!question] Targets: 

>[!danger] Depends: 

How much of the napp processing interface is being leaned on for the action processing framework ?

Do the napp definitions allow a nested napp definition ?

Fundamentally, the sniffing of items to recover type safety is unavoidable.

We should tuck these away in their own function module, like the napp tools, and then know that we have a clean interface in front of the callers

1. Parse the napp json to define the schema of the napp interface, which should be standard across languages.
2. provide an action creator that makes napp actions when the functions that the napp interface defines / creates 
3. take in a json object that is untyped



Given a napp definition object, which would be a zod schema, and would be flat for the names of functions, 

Nesting napps within each other seems pointless, they should be flat in the namespace ?

> We should solve this problem for napps in general, rather than just our single problem

First, drop the nesting, since this causes huge problems.  Either split the napp namespace out or do something like that.

I will make a router object that holds all the internal methods and flattens the namespace of each one.

Basically, in a napp, there is a mod.ts file that is expected to have the functions the napp.json specifies.

! use the path param in the napp tool spec, so we can repoint different functions in the same flat space ?

If we allowed a function name field, then we could do the mappings to the provider objects inside the napp definitions ?
But what about if we have an object, and we need a mapping to go into it ?
The shortcut of not including the scope seems to be confounding things here.

If the provider functions, make the scope wrapping be a currying function on the tooling ?

We could scope the napps futher, by adding path depth on the napp name ? so `@artifact/provider/branch/read`

Then we fish up the provider object we want based on this nested name, or nested napp definition.

Feels like napp tools should be flat, since what does it even mean to present non flat tools ?

So the napps can specify the module to import, so the provider module simply exports a number of napps.  This would break the one module export per napp rule ?
Make the providers be a regular module, then the napps just import that module to export their own things.

Could a napp be specified by not just name, and instead be a path too ?

Should napps have some internal state, or some filesystem prerequisites they need? should its state be a schema, and should it be able to be set as part of the invocation ?

Should the dreamcatcher attribution agent be configurable in the napp ?  Or is it so baked into the infrastructure that it is incompatible without it ?

The napp format controller should be handled by change control, and would consider the arguments for upgrading different things.

napp codegen would take a zod schema and export json-schema files to disk for the packaging process of napps ?  Or dynamically generate it using the zod exports.  May use a special key like `napp-zod` to export the zod version of the napp.json.

parameters schema and the parameters themselves should be separated, since they are not the same thing.  Or just leave it.

So napps will end up with a table.

Here is our chance to make the napp loader, where we pass in the napp definition, and the path to the module, and then we will output an object with a dispatch.

Could make a zod napp.json, which is virtual.

Need a way to turn the napp into an action creator, where it has the correct types.

Then when recieving an action, we need to use the napps that we are told to manage to figure out what function we want to call.

So we also need a compatibility processor to turn a napp tool into an LLM tool, possibly leveraging the vertex sdk for this.  

Then we also need the mango interpreter, which might be possible to define in the napp for some reason, like a query that it knows how to use, or that is used to provision, or a way to provide a tool call that executes a mango query as part of the run, so the tool call can be programmed entirely in the napp format.

So we would export from a napp on the `napp` key, a file that was dynamically generated based on the zod schemas, that represented a json-schema object.  this is how we would have a zod specified napp be exported, so it could be called in a cross language way.

If we don't export the zod object, then we cannot have types at typecheck time, since we cannot generate types at compile time.

We could add keys under `deno` to indicate where the types can be found if we export those.  Or the tools we use can do some codegen to make types, if they aren't part of the napp.  A good napp published to the registry would include types as well.  It might include a zod schema as well, so we can just read that directly perhaps ?