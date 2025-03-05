
>[!tip] Created: [2025-03-06 Thu 09:56]

>[!question] Targets: 

>[!danger] Depends: 

Rather than have a registry, we could make it so each module had to export confirming to a particular type.

Then when we import, we don't use the registry string, we import the whole package ?

It is important that the schema for the NAP be exported separately from the code to allow the client to import just that schema instead of pulling in a whole other server-side code that might not bundle or compile. 

On the client-side, we would say "Here is my Napp schema, give me back action creators." 

On the server-side, we would say: "Here is my NAP schema. Here is my collection of implementations of the functions. Give me back function invokers that can take in an action and run it, returning the result." 

We could almost assemble a provider object that was identical to the existing one that was made up of a range of action creators.  This thing is ergonomic on the consumer side, and on the service side, it's just looking up action names to find implementations and then executing those.

In doing so, we can keep the module resolution and loading mechanism separated out, which allows it to be dynamic and can potentially permit the use of other languages in containers. 

It should be noted that the requirement for a supplied schema to be fully fulfilled by the supplied module is only incidental, so we don't need to return all the functions of the schema. We only need to return the exact one that is being asked for. 

Files should be out of band of the function call graph, and so maybe streams should be too. Should each stream result be able to return some kind of file under the hood as well?
Yes, each time a stream result comes back, we may receive some files. How would we extract the files out from the stream result? 

We need a standardized way to extract the files back from an action anyway. 

We probably need a way to send files in as well and make sure they are in a sideband. 

## Transferring files out-of-band from the call stack. 
Option 1:

1. The action can include a reference to the hashes of files that it wants to send.

Separately from the action, we transfer those binary objects that will satisfy the hashes provided, which can include tree entry data structures that allow for directories to be sent as well.

1. On arrival to the invocation, the invocation pre-loaded with these files and would, using some kind of a context hook, be able to figure out what files came with this particular action if any and then read them in as binary.

Three in the scenario of a reply or the outcome from an invocation having changed files, we can simply look at the file system and then create an object that can be sent back down to the client like an outcome object where it can also include some files that have changed as well. These will have the same format as the Action where they are simply a hash, and then under the hood we will make sure that those hashed items are available asynchronously.

Importantly, the fulfillment or the retrieval of the files can be asynchronous, which means that the logical processing can begin before the files have fully been received. 