
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

Grind out multiple paths, by randomizing when QA will pass a transition or not, then making sure all the invariants of the system held at all times.

Diagram showing state of packet in the UI.
Show what funds it has available, what solutions are targetting it and are partially in motion.
Be able to idea about what solutions could be happening.
Header shows with the packet virtual and ghostlike, as the packet isn't formed yet.
Packet with solutions loosely targetting it.
Stack of different value based things attached to the packet building up a prize.
Generate random interactions of packets and see how things go.
Make a board game where some parameters are randomized in the game, so people can see how to play.  Have an AI alongside advising on best moves.  Show how reputation matters, as some actors have good reputation, and then sometimes do bad things.
Some packets solve things about the packet system itself.
Have gambling pools where you put your funds in and purchase NFTs that get royalties.
Some can play as devs, with a dice to roll on how well they do, as a different school.
Or as someone running a dev shop with different people coming in and out, you offering different incentives and pay rates.
