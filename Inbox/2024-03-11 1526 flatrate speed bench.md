
>[!tip] Created: [2024-03-11 Mon 15:26]

>[!question] Targets: 

>[!danger] Depends: 

Make isolate generate say 100 parallel accumulations, and record how long it took for all to respond.
Use timing metadata to determine stats about the distribution of each one.

Bench in the cloud cannot be run the same way.
We could run the bench inside an isolate, and then record the results, push them back to github, or simply host the page ourselves ?

Run from inside an isolate, using a dedicated testing chain.
Should be able to see the live benchmarks running.
The graphs should the long term results.

Using the api gateway function of the chains, should be able to retrieve files from a pid.
PID is a query param, and without this, the main branch is used.

So our dashboard would have lights for properties that we passed, and the properties can be chatted about in the specs, and then amber and red lights for properties that haven't been built yet, as well as the invitation to fund these pieces.