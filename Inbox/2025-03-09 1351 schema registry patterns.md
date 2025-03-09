
>[!tip] Created: [2025-03-09 Sun 13:51]

>[!question] Targets: 

>[!danger] Depends: 

We could make the Zod schemas available by way of an artifact call and then they get fetched live. From that point on, the client makes the function calls. 
Actually, that seems bad because there would be no type safety there. 

I think the use case we want to support is that you call something like `artifact.fibers.functions` and give it a napp name. What you expect to get back is some type-checked functions. 