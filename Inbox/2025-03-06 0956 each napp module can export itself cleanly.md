
>[!tip] Created: [2025-03-06 Thu 09:56]

>[!question] Targets: 

>[!danger] Depends: 

Rather than have a registry, we could make it so each module had to export confirming to a particular type.

Then when we import, we don't use the registry string, we import the whole package ?

It is important that the schema for the NAP be exported separately from the code to allow the client to import just that schema instead of pulling in a whole other server-side code that might not bundle or compile. 

On the client-side, we would say "Here is my Napp schema, give me back action creators." 

On the server-side, we would say: "Here is my NAP schema. Here is my collection of implementations of the functions. Give me back function invokers that can take in an action and run it, returning the result." 

We could almost assemble a provider object that was identical to the existing one that was made up of a range of action creators.  This thing is ergonomic on the consumer side, and on the service side, it's just looking up action names to find implementations and then executing those.