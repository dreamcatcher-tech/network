
>[!tip] Created: [2023-07-08 Sat 13:43]

>[!question] Targets: 

>[!danger] Depends: 

Using xstate model based testing, we should be able to take a snapshot of the chain at each state, and then use this to move to the next states.  Altho it might be cheap enough just to recalculate from start.

? how would we simulate having multiple users doing randomly different things ?  Can this be combined with fuzz testing ?

Do we need this level of testing to get going ?  Or can it be done later ?

Seems unlikely any fundamental issues will be uncovered, rather just bugs.

The xstate diagram could be very helpful to document how the system works.

What about some load testing, were the model is run multiple times with different randomized params and the model assertions all hold ?  Each different type of event could be called upon in different sets of states, so the events stay the same, but the states do loops and different events that call themselves.  So all kinds of usage can be modeled in states.

Fuzzing would have to run the model multiple times, with events that took a randomized param and generated something from it, like a different DAI amount.

Can use event cases to make the same event have many different outputs.

User count can be tested by events that use two users ?  Want things like 3 users, one malicious, one appeals - something like that.
