
>[!tip] Created: [2025-02-08 Sat 12:14]

>[!question] Targets: 

>[!danger] Depends: 

visually show the coverage, but to the LLM, show which tests are exercising that line, so it can consider its moves, which are:
1. to modify existing tests
2. write a new test
3. modify the code

This is a strategy that we would make open to anyone to improve, we would have a set of problems, extracted from live real use cases.

New strategies need to  be run on the last weeks worth of  usage and perform better without correction.

Detecting a correction from a human is key - when the bots suggested something that the human refined - we should be getting down to zero shot, and even better needing to never have run the response at all.

It should generate multiple versions using each strategy, and then compare the outcomes, as well as run several times to know its stability, and to return its confidence level.