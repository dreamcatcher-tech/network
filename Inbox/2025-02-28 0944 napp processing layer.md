
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

We're starting to see that the Napp format is actually very specific and that some places can take a schema which can be either a JSON schema definition or it can be a Zod schema. It'll probably be allowed to be any other kind of schema that has compatibility. Or can be can spit out JSON schemas in an acceptable format.

The overall Napp object can be subjected to a schema which can be published as JSON schema or done using Zod. And then inside it there's these options where it could be a JSON schema or not. 

We do start to look a lot like a web request framework.

Be nice to give napps the same interface as what tRPC has, where it is the main object then you have your own apps structured on it ?  

We should be able to list out all possible design types by copying every other rpc based interface out there, and just wrap around that - they all reduce down to the same mechanics.

So, how can we do side effects in a napp ?
The provider functions are side effect functions.  Should a napp tool be flagged as being a side effect, and therefore unrepeatable ?  Side effects should be configurable to have different parameters. The default is just true or false, which means that it will be run with the default side effect parameters. Extra parameters can be the number of concurrent or redundant calls that the effect needs to make (e.g., make ten calls and pick the quorum of seven) or other things like that.

Nice to have static registry, since the napp string can be type checked too.

Make a registry, so when we load from there, the napps come in with the correct types.
Building a new napp means we add it to the registry list using the imports, so we can dig it out when we need it.

The runner of the provider would mount the provider artifact, and this context would be shared by the other effects that were running during its run ? so the context is shared by all ?
On mount, we 

Mount is just a binding to a tool.  It could then be specified as a tool, with a special key, like `@mount` and `@unmount` and then some keys like if the context is shared with other invocations or not.

So, what we do is that when the provider is first mounted, that's when it would create the instances of the databases that it needs. Then, when each of the individual functions below it gets called, they can call the use context function on artifact which allows them to have access to these side-effect related things. 

We will need type checking for the functions to be determined from the NAP definition. So we should be able to import from the napp definition file, run it through a tool that gives us a type, and then use this to check our function signatures when we implement the modules. 

We could make the host of a particular napp act like middleware where every napp function comes in and is processed or modified in some way which can be used for things like authentication. 

The issue of getting context into the napp function. So we could allow some kind of a fancy hook that it pulls it in from the environment using async local storage or something similar. But we could also allow it to have an optional extra parameter on its.function signature. We will pass in the artifact object as the last argument. This should work for either a single object argument or for an array of arguments that are spaced. The issue is that the typing of it might be problematic or tricky. That's why phrasing it out from inside the app seems a lot easier. 

The things we need to do are:

1. Be able to provide the napp description object that includes static data and config data as well as schema data.
2. We need to be able to generate an object that has functions attached to it that are exactly the same as the tool descriptions in the napp, so that when they get called they will create an action object.
3. We need to be able to take that action object map back to the function that we are supposed to call with that object and then turn that action into args for the function.
4. Run the function.
5. Make sure that the return value of the function is parsed using the schemas defined in the napp definition.

Streams might need to be separate from tools, since they are a totally different return type.
Also we may support streams in, so a tool call can receive a stream.
A stream would never be called by an LLM in the current tech paradigm.