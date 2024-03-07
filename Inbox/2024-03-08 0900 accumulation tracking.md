
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
2. If you do not await actions, and if you are storing 

Making an ai chat call
1. api call with some tool calls back

BUT if files changed, then serial processing requires a commit, and cannot just move on to the next action.  So, should all serial require a commit, meaning that triggering the next action is the job of commit ?  Means that IO would be more predictable.

If there were no fs changes, we can allow concurrent execution

Merge can be massively parallel, up to some limit.

Do we need a useState() type thing so that side effects can store some data on chain, so they can be recovered immediately ?
Or make side effects using `useEffect( () => {...} )` so the state can be recovered easily.
So perhaps the best way is to make a hook where you supply a function, and it will always be run in order ?  These would act like useMemo.  
Later, use react tools to analyze the code and know what dependencies were missing.
Could write to the api during the execution of this thing ?
Need to wait for it to finish.

If fire off a flurry of accumulations, these shouldn't execute in series, they should be in parallel.  So perhaps all accumulations should be branch options by default.  If you want these to occur serially, then you should await them appropriately.

So the only process option in your control is noClose or noAwait.  

With no gaps in between, a branched process could be fast forwarded, as tho it was always on the current branch ?