
>[!tip] Created: [2023-12-21 Thu 11:15]

>[!question] Targets: 

>[!danger] Depends: 

We should be able to describe the stuck loop in reckoner logic.
Should be a collection of statements about the flow that a user goes in, along with a set of runs that specify some initial conditions and some choices at different steps.

As the logic is updated, then the tests should attempt to auto update as best they can.

This is essential as it gives us a way to be grounded about what we're talking about, rather than clashing where the fog is too great.

Can force a dictionary to be constructed at each step, so that names of blocks are consistent and do not clash.  The description of each block is matched against its name, to propose new names, it is also compared with every other block to ensure orthogonality.

Merging in other peoples blocks should be easy as an automated reconciliation can take place, and then the humans sit down and decide together what tradeoffs they are prepared to make.

At each stage that some scenario inputs are given, such as specifying a set of helps that might come back from a goal search, an assessment is made whether the given inputs match the current logic, and a fail is returned if they are unreasonable, and a discussion is presented.
Rerunning can occur once the scenario has been made plausible again.

The failure can be left in the test suite, since it represents something someone might reasonably think would happen, and the failure is the answer, so in this case it should reject with some reason, this is the correct operation of the model.

Auto classify things as happy path, or edge case.

NL constraints on the input, so get the LLM to try generate bad cases and reduce them down to the minimum possible.