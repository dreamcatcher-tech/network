
>[!tip] Created: [2025-03-14 Fri 12:29]

>[!question] Targets: 

>[!danger] Depends: 

is there some way to express the consistency and timing guarantees of a system, like a globally distributed s3 clone, so that we can be assured that all types of concurrency are at least addressed, and compared to other systems, and can have tests build that verify the model assumptions ?

Can this model be proven to be exhaustive ?

The goal would be that, if such a model was created, and tests made to prove it, then this model could be put into an LLM so that it could answer any question that was thrown at it, since it would be an exhaustive model. So the LLM would translate the users question into a simplified form that can be tested against the model, and the outcome can then be translated back into the users scenario and discussed with them.

So ultimately, we would want the spec of artifact to be set up as this formal proof, then fronted by an LLM so that all manner of questions could be answered by it, plus ways to design systems could be suggested.

Further systems could be modelled in TLA+ using our model as the backing guarantees.

All the tests that exercise this model should be running all the time, so we have normal operations, but we might find we can interject some tests along with normal use, so we are always assured of timing guarantees, which can be notorious to prove in the face of packet loss and other system anomalies. 
## Example Workflow:

User question:

> "What happens if an object is updated concurrently from Asia and Europe and then immediately read from the US? Can stale data ever be read, and for how long?"

System flow:

- LLM parses this question into a structured query about concurrency, ordering, and consistency.
- Formal verification or model-checker evaluates the scenario explicitly.
- The exhaustive model either proves it's safe (no violation) or provides a counterexample with exact timing conditions required for stale reads.
- The LLM translates the formal output back into a natural language, explanatory format for the user.

If a fault is found, then this will be filed as a stuck.