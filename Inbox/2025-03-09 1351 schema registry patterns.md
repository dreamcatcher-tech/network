
>[!tip] Created: [2025-03-09 Sun 13:51]

>[!question] Targets: 

>[!danger] Depends: 

We could make the Zod schemas available by way of an artifact call and then they get fetched live. From that point on, the client makes the function calls. 
Actually, that seems bad because there would be no type safety there. 

I think the use case we want to support is that you call something like `artifact.fibers.functions` and give it a napp name. What you expect to get back is some type-checked functions. 

If we use the exports of the package to export the schema in isolation, then we can be assured that in the browser-side bundle, no server-side code will be pulled in. This would need to be a check when publishing the naps that the nap schema itself was able to be imported by the client unencumbered.

So I'm thinking that the nap modules should export a named export at the root called "napp". This is the pure Zod schema with nothing else imported. This is the default convention.