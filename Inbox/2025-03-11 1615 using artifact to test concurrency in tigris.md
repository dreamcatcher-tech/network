
>[!tip] Created: [2025-03-11 Tue 16:15]

>[!question] Targets: 

>[!danger] Depends: 

Artifact should allow us to set a region where we want the compute operation we're asking for to execute. We should be able to use this as a way to run some test code that tries to hit a tigress bucket. So Artifact itself would be running assuming that all of the check and set operations are correct and then using the regions specific selections from Artifact we would be able to fire up little mini test runner isolates in far away regions or perhaps all regions and then we would run some Deno test code that tried to do check and set flood tests on tigress to see how the consistency elements of tigress operated. 

We could know that we're trying to hit the same object by just using a hardcoded value. The exact bucket or the test prefix for the bucket is something that is distributed with the test run. All the results from these different runs along with metrics would be collated back to Artifact, and then we could observe them from there. 

This can also allow us to test other solutions, including our own web-facing fronts, from a range of different regions very easily. This could be used to produce a very simple global ping and latency checking service (which people often pay for). We could do this and hook it up to a pipeline of AI services that could automatically take action or do some other type of activity based on latency as well as optimizing code based on long-term latency statistics. 