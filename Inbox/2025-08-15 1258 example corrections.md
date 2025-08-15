
>[!tip] Created: [2025-08-15 Fri 12:58]

>[!question] Targets: 

>[!danger] Depends: 

If we have a bunch of responses, and we say what we would have liked the response to be, then the machine works to try fix itself minimally to give the desired response.

It looks across all the different corrections it received, and tries to extract out commonality to put them at a higher layer.

It tries to group multiple tests as similar.

If the same RAG context got touched then the tests can be thought of as the same.

It tries to make generic tests that do the same as a group of specific tests.
It runs the generic tests first to get quick feedback, then if there are not failures at the gateway tests, it runs the lower down tests.

So it gives the bots a way to get quick precise feedback followed by smaller fine tunings, and the ability to deprecate or kick out some tests.