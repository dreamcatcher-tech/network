
>[!tip] Created: [2024-03-07 Thu 18:02]

>[!question] Targets: 

>[!danger] Depends: 

If we document cleanly all the different types of operation that the system supports, then an LLM can be tasked with generating tests that represent all legal combinations of these primitive moves.

Then it can also test the exceptions too.

Gives us a more thorough way to do e2e testing.

We might be able to figure out all possible combinations of primitives, but the LLM should be able to get pretty close by listing things out.

Develop a shorthand notation to describe the sequences of moves we are attempting.

Can then turn these into actual programs that can run large load on our servers.