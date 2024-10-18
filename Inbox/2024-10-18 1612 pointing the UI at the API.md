
>[!tip] Created: [2024-10-18 Fri 16:12]

>[!question] Targets: 

>[!danger] Depends: 

Once page loads, it could ask the origin what the API url is ?

Means we can control the api location using deno variables.

If we do not do it like this, then we can only be pushing out to one UI deployment at a time.

We should have next branch being published with one url, and main branch publishing with something different.

These could just be controlled in code tho, which makes it easy ?

Different values in each branch, so the deno deploy works differently for each one.

Simply limits what can be worked on concurrently.

Need to move to the main deployment being done using tests that pass before deployment.

So we want longthreat to be stabilized, then reasoner to take over.

So we should stabilize longthreat, and then move on to performance.
UI hosting needs to change to give us some visibility into what is hitting the front.

Really need a central channel where everyone can post in issues and generate NFTs for these faults.'


FAILURES
test with dependencies ... run => ./isolates/test-case-runner.test.ts:18:11
reasoner ... run => ./tests/reasoner.test.ts:26:11
router ... run => ./tests/test-file-runner.test.ts:65:11
test fixture ... run => ./tests/test-file-runner.test.ts:121:11