
>[!tip] Created: [2024-03-08 Fri 09:00]

>[!question] Targets: 

>[!danger] Depends: 

May not be sufficient to rely on accumulations being derived ?
May need explicit definition - good as would enable loopback accumulation too.

A simple test would be to make a pierce that does accumulation, and then call it again.

Reply of side effects is crucial to isolate operation, since we can't tightly control which isolate will receive the continuation actions.

Loopback algo

Grab the lowest request that has no reply that has a target of this pid, and is not awaiting on any accumulations.

Track the trails separately in the io file ?
This seems the strongest method, as sniffing is sensitive.
Make tests on the accumulator and iochannel to work out different combinations of events that they operate correctly on.

execlock keeps side effects from running concurrently.
A branch is critical for keeping things in order.

Is it possible to sniff accumulations and allow loopback ?
If you had execlock, then you could know 
So anti pattern is side effects that are not atomic, since these cannot be replayed.

If side effects time out in a minute, how can we run longer ones ?
Pattern for a long side effect that would pass program control to different actions.
So a supervisor would run, and would make calls out to actions, where the actions are guaranteed to run to completion at least once.

Still need to watch changes to files in the browser.

What is the complete list of timings that describe what a running isolate can do ?
And, if we list the operational atoms, what is the exhaustive combination of operations that we should test for ?
1. receive a pierce
2. reply to a pierce
3. request an accumulation to a remote process
4. request an accumulation from self process
5. move on to the next request in this process
6. replay a

Could a state machine be described in NL and then all its possible states be generated ?

Specify N where this is the repetition factor beyond which repetitions are considered to have been completed.  Definitely go above 10, to cover lex vs numerical ordering bugs.

What are the rules for side effects, and how do we enforce those rules ?
1. acc intermingled with side effects are bad, since no reply - doing an accumulation is a halt of the process from within which the process might be restarted.

Making an ai chat call
1. api call with some tool calls back

BUT if files changed, then serial processing requires a commit, and cannot just move on to the next action.  So, should all serial require a commit, meaning that triggering the next action is the job of commit ?  Means that IO would be more predictable.

Merge can be massively parallel, up to some limit.