
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

It might be possible to set goals for the system - such as a final state with some context described that says how many packets, how many rejections, etc.  Then the system might grind thru and find all the paths that could arrive in that end state.  This can make specifying a starting condition for a very specific test very easy ANY test all ways of arriving at that state THEN proceed with the test itself.

So we would specify some starting conditions for a scenario, list what the conditions are once reached, and list how many simple paths and shortest paths were available to get there.  Then execute the next stage which is a set of scenarios that build on the preconditions.

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

## Implementation
three options:
1. One large statechart that has a single state with many transitions that are governed by conditions
2. One large statechart broken into modules, such as the funding statechart having a range of transitions for funding with eth, dai, nfts, and other random tokens
3. Actors that represent each packet.  This appears hard to get going in xstate tho

Parallel states for actors that keep trying as long as there are new packets to fund ?
Send a self event whenever something new happens, which causes the parallel state charts to process again.
Funders are given several funding options:
1. no fund
2. eth
3. dai
We could loop around based on some pseudo random conditions to decide when the packet is funded completely enough to move on.
Is randomizing better than exhaustive path walking ?
number of funding events could be multi path too, so a state that says funding by dai that offers multiple transitions that fund different amounts, where each one would be taken once.  Could cause a loop if we wanted some funding condition set in context ?

What does every possible combination of packet paths even look like ?
Have to put some bounds on things like concurrent appeals, funding participants
How can we test concurrent packets operating at different times, and in the same block ?
The parallel states could represent concurrent packets, or different actors in parallel like funder, solver, packeteer, qa.
Want the order to be interleaved - so if set a target for number of packets we want, then the way to get there should be all possible paths.
homestate could point to any of the action states (fund, propose, solution, appeal) and each one of those can point to every other state.  So this causes a mesh of paths to be traversed, each one providing a different order in which the context was increased.
If we carry with us a current transition id, then we can walk thru all the possible paths this particular transition could possibly take.
This could be auto generated by making the transitions a standard set, then adding in to all the states.
Add an action that cycles up the target transitionId that the next transition will act upon.

If we cap the number of times any given action can be called by parameters (eg: header cannot do more than 100 headers, funds cannot fund more than y packets and must always avoid 50% of the packets)

Seed the selector based on the context content, so for a given content, it will always select the same way.  Or use a tick counter to determine what to do.

Buffer up tx into a block, then await all to be processed, and check all the logic of each one.
Make the failures be a dedicated state where we take a different failure path.
Can require all paths have at least N failure calls in them before concluding.

By making proposeSolution be its own state that holds 3 transitions we can ensure that every case of everything else is covered by these three cases, namely: propose, proposeTwo

The order that things get called in matters, so can we do every possible order ?

Stop conditions should be provided to the path generator.  Keeps it out of the machine, and just finds all paths that meet the conditions at some point.

? can we know that we defunded everything in some tests ?  Say record a peak fundage, then record a zero fundage, after N calls of the fund mechanism ?

Do we bother with trying different addresses ?
Use the ipfs hash as the deterministic seed.

target transition twizzle can be a transition, rather than making each transition select something for themselves.  So we would either make a new header, do an operation on an existing id, with some limit on the number of types of transitions we would enact on any given id ?

Could make the end condition checks be the absolute limits that the model will allow to run until.

Use action loops that increment context to ensure that every possible value in the range will be used, as the next transition that makes use of whatever value is present will be taken at every incremental step.

Filter out the types of transitions that iterate, or summarize them.
If the iteration transitions were all handled in a state, then we can just show what states we went thru ?
State cascade from packet header to: fund, defund, resolve, reject, appeal,

Scenarios:
1. give me a fully funded packet that was solved
2. give me 17 full funded packets where 5 of the solutions were appealed, and 10 of the packet headers were appealed, with 2 packets having simultaneous solutions.
3. stop after 3 appeals, with 4 succesful packets that were double solved
4. solve a packet after it has been resolved.

Can reach end goals by specifying conditions in the test paths generator.


## Extras