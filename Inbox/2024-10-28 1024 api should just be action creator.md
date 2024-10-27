
>[!tip] Created: [2024-10-28 Mon 10:24]

>[!question] Targets: 

>[!danger] Depends: 

If all it does is make actions, and then return promises that sometimes resolve, then that becomes really simple.

What about the tool calls of the passthru napps ?

So we actually cannot use zod, zod is what we use to generate the schemas.

What we need is perhaps the action creators themselves, with type info ?

Or use the schemas, to then generate typed zod schemas ?

We need a generation step that 

Or, we can import the types from the package, if they are present ?


So inside the module, we would write in zod to generate json-schema.

But when importing using the napp api we need to process the jsonschema to make the actions and give them their types.

We can still import directly from a napp package, but this will only have the code that is held in that package alone.

The napp workflow then has a build step / ratification process, where it takes the json-schema and generates TS types.

So parsing the napp would go:
1. insert in all the schemas that we have defined locally
2. resolve all the imported napps and their functions
3. now we have a large json-schema that is fully qualified, and defines all the tools, fully resolved

But then how do we handle the addressing ?

So a napp action needs to include what napp it is destined for, which needs a 'self' key, for everything defined locally, which avoids a global namespace.

Seems we need to actually write the ts types to disk, that they can be imported without issue, as import on .json cannot be used as a ts type at runtime.

The runtime environment should compile the ajv schemas on first read, and cache them on disk, so that next time it runs, it can be instant.