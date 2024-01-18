
>[!tip] Created: [2024-01-09 Tue 13:34]

>[!question] Targets: 

>[!danger] Depends: 

The only problem is latency, but if these calls are happening concurrently, then the bottleneck is the LLM response speed anyway, so using the LLM for plumbing work like channel balancing and moving actions around is perfectly fine.

When we find a path that is working correctly but we'd like to speed it up, then
Provided the tests are all working, then the logic is perfectly fine.  This can let us make a working system faster.

? how to make a system to start calling the LLM to do direct channel manipulation and calling other LLMs. 
Then how to make a test bench to try get the outputs to be correct.  If we actually need format correctness we can use a jsonschema checker in a very simple way.

So long as we could debug and rerun the LLM running at any point, then we should be able to build stable systems.

Any time any kind of computation occurs, other than invocation, an LLM should be doing it by being forced to call the function.  If it does it wrong, we just need to prompt it differently.

LLM should be given enough tools that a DSL is possible, and then the LLM does all the rest.

Any code that I have to actually do a process or list out what the steps are, this should be an LLM call.  The functions I provide should be simply tools that enable a verb in the system language.  The system language should use dictionary terms, where verbs are functions, and describe the properties of the system so it can be understood.  (system should know when it needs to ask for more context or a higher intelligence)

So long as we can ddebug it, reprompt it, add more tests to it, we actually don't care how much of the system is run by LLM.  If we think it is simple enough, we can 

! 

The LLM system can serve as the perfect code spec, where the only gain is predictability and speed, and offline ability.
So the spec is given in an LLM executing, with possibly a TLA+ model alongside, and then code is written and tested next to it.  This is only for purposes of performance and network independence.

Any changes to the code would happen in the LLM first, and then GP4 could use existing code as a basis.

So in this way, ALL the code should be LLM first, since it is easy to reason about and to test.  Once code is made, then the LLM can execute tests against it using the tests that were used for the pure LLM piece.

One of the keys is that the LLM should write things to disk that can be used by other later calls efficiently.  So you can have intelligence enhanced calls, and functionality that avoided writing code, but still have high performance since things are baked down - baked NL.