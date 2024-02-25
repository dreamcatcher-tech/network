
>[!tip] Created: [2024-02-25 Sun 10:32]

>[!question] Targets: 

>[!danger] Depends: 

Given how much optimization goes into git, and that there is a single canonical version, we should invest in making a wasm version of that source code, so that we can use it in the browser.

This should theoretically run the fastest, and stay the most feature complete.

For a while, if we are running in deno deploy, we can maybe run the git exe directly.

We also need to have a path forwards for making a distributed version of deno deploy that can run on the dark edge and provide the same functions.  The queue would be critical here, as it deals with distribution, redundancy, consensus, and pricing.

The queue is the centre of the whole thing - solve the queue, solve the platform.