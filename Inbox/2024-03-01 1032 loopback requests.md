
>[!tip] Created: [2024-03-01 Fri 10:32]

>[!question] Targets: 

>[!danger] Depends: 

Requesting something to self could be permitted, but needs to make the lock on the current executing item be dynamic, rather than monotonic, since it needs to pass the lock back.

We could make the end of the execution find the next action, and send a message to start that, rather than having a large number of isolates at the ready and waiting, plus bogging down the queue since they haven't executed successfully.

So if upon completion, the request sends in its reply to the pool, and then sends a message for the next in the queue to execute, this is cleaner, and possibly not that much slower.

Means that the execlock is passed on when execution has exhausted, not necessarily completed.

Switch the api into error mode, so if further activities occur on it, it will error.

Easy start is to error on loopback requests.

Must we store the triggering request, as well as the sequence inside that execution ?
If we only store its value in the triggering execution, then we can figure out which action caused it by finding the highest unfinished action destined for us.  If it triggered things in our own chain, then it would get more complicated, but loopback seems wierd and should be blocked anyway.

See how we go with just pure sequence numbers and nothing more.
We should be able to figure out which action to rerun / start again once all the results come in.

Trigging the called by watching vs control passing.
Separate out the watching functions to be something that is done externally.
The executing function should be the one to drive the computation forwards.
So if we send a remote request off, then it completes, should we have been waiting for it ?  What if we died while waiting - who would kick it off again ?
Might was well just leave it up to 

Watching should be only for pierces - external things.
Internally, we should rely on the execution to pass control along.
In testing, if it has a function map it can access, this will give it the previous function so we can avoid running the function again, which is annoying.

? What about side effects ?  Currently these run inside the chain, but they should really be an action with a specific function and output, so we can replay what happened with the external system.  Hopefully we can build that in later.

ExternalId, like a ulid or the accumulation index, which gives it identity relative to the transmitted.  Then once it is solidified, it gets given a sequence number, which is the reconciled and committed to disk index number, used for internal execution.  When the reply comes back, we can check the io queue to see if all the outstanding PoolRequests have returned, in which case we can resume the execution of the originating action.

We could track the outstanding requests in the reply to the function being executed.

IO cannot be blanked of poolrequests until the originating action has completed.

A collection of requests should all be stored in the kv as a single array, as no need to do one write for each.
