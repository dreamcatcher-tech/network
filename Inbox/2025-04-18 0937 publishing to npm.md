
>[!tip] Created: [2025-04-18 Fri 09:37]

>[!question] Targets: 

>[!danger] Depends: 

If we do, then all the vibe coding tools just work.
Also chatgpt can check the code and run it too.

but it will create many errors that need tracing down.

how can we stick entirely with deno ?

we could move to using deno with vite in the workspace itself, making it easier to make server side changes live ?  This way, we know our packages work.

The issue is the context package has many dependencies, and pulls in half the monorepo.

Schemas could be made a dedicated package, possibly part of the api.
so could drop provider as a dependency.