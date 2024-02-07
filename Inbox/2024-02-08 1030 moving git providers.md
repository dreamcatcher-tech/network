
>[!tip] Created: [2024-02-08 Thu 10:30]

>[!question] Targets: 

>[!danger] Depends: 

isomorphic git seems too bound up in multi platform support to be moved forwards.
We should move it to support only web.

Or, we should use deno alone, and use git bindings.

Ultimately some kind of wasm git implementation, done in rust, would probably work best - then it works in browser or in deno.

As long as we work with deno deploy, we no longer need git working in the browser.

We would only need a subset of all git commands, and could do some tuning specific to our use case.

Tied to wasm ports of libgit2 is better, since less work to stay up to date, more performant presumably, automatically cross platform.