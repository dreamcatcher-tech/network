
>[!tip] Created: [2024-01-09 Tue 13:34]

>[!question] Targets: 

>[!danger] Depends: 

The only problem is latency, but if these calls are happening concurrently, then the bottleneck is the LLM response speed anyway, so using the LLM for plumbing work like channel balancing and moving actions around is perfectly fine.

When we find a path that is working correctly but we'd like to speed it up, then
Provided the tests are all working, then the logic is perfectly fine.  This can let us make a working system faster.

? how to make a system to start calling the LLM to do direct channel manipulation and calling other LLMs. 
Then how to make a test bench to try get the outputs to be correct.  If we actually need format correctness we can use a jsonschema checker in a very simple way.

So long as we could debug and rerun the LLM running at any point, then we should be able to build stable systems.