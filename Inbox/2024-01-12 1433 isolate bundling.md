
>[!tip] Created: [2024-01-12 Fri 14:33]

>[!question] Targets: 

>[!danger] Depends: 

Isolates should be provided as separate library items, and so they would run a bundler to produce outputs that could be loaded by a browser.  We could use url resolvers to load files direct, but this means that you could not use npm modules.

If the code was made to work in deno, then we could do things this way.

Basically we need to provide something loadable to the engine.

We *might* be able to bundle in the browser itself so that we can attempt to develop code in the browser.