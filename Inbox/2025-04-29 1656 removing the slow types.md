
>[!tip] Created: [2025-04-29 Tue 16:56]

>[!question] Targets: 

>[!danger] Depends: 

The slow types mean we do not generate type definitions, and then jsr doesn't publish consumable pacakges for typescript.

So we need dnt in the meantime.

Generate the types using a tool.

if we move the web packages to all be in a single package, this saves doing the weird bundling step

then if slow types are removed, jsr package might be usable directly.

if jsr can be used directly, then we can publish it direct to npm.

need to make some type tests that affirm the zod schemas match the ts schemas.