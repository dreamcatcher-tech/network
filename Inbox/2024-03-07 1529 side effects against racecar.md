
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

Tool cal

