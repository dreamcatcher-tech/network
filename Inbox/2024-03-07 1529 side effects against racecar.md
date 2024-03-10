
>[!tip] Created: [2024-03-07 Thu 15:29]

>[!question] Targets: 

>[!danger] Depends: 

How to wait for these things to finish indefinitely ?

? Just keep waiting if there are no accumulations ?

A side effect should never be restarted - once running it must be allowed to continue to termination.

What if a side effect dispatched some api actions part way thru its run ?
Therefore, side effects must do nothing but their actual side effect results, else further accumulations will be lost.

Should be able to name all the interplays and combinations of continuation / repeatability executions.

Optionally, could the accumulator be kept running ?  We just await long enough to get some accumulations out ?
So before running, we can hook the accumulator, wait for something to arrive, wait one event loop, until no more changes, then move on.

What if the effect is supposed to keep running ?
Should it be allowed to push things into the accumulator regularly ?
What if it got awaited multiple times, as the accumulations returned ?

Seems the only rule is, once exe has moved on, no more accumulations are allowed
Set an alarm trigger so once exe has stopped, no more accumulation is allowed

Ideally the format of side effects is very deliberate and narrow, where they can only do a request reply style thing.
So to make calls out to openai, you would need to do a branch request to a function that only make api calls.

Tool calls should be the end of a request, with a further execution being invoked.

So it can probably work if we always await actions that are made - it would be an error to make a request into the accumulator and then do something side effecty, then make another accumulation request - you must await the accumulator every time.

Need the `useEffect()` hook so that side effects are replayable.
Or, need to hang on to the thread until the other actions have come back.
Replay is impossible if side effect results were not stored somewhere.

Storing the session file each time an activity occurs.

Allowing in band actions, so it doesn't all have to be a branch action.  Needs execlock.

Files being altered during execution and getting merged back in.

Streaming down the changing session file, even with replay occuring.  

Import of large file broken into little files.

Make a simulation of AI calls so we can be rapidly assured of correct operations.
Mock way to do an AI call, so we can simulate all the moves required.
Simulate system load that is similar to the AI calls, so we can exercise these.

Could mock any class that depends on api by returning different functions on lookup.
Then we can test the isolates directly, without firing up all of artifact ?

Milestone: be able to have a chat using the UI, with chat history, with session management.

Security so can have secured writes.

Want to get testing running on the platform, not in vscode.  These AI tests are a bit too slow to run locally anyway, plus we need synthetic tests to exercise thoroughly.