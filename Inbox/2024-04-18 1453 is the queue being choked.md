
>[!tip] Created: [2024-04-18 Thu 14:53]

>[!question] Targets: 

>[!danger] Depends: 

So earlier queue items that would generate more parallism being held up by items ahead of them ?

Actions that cause fanout need to somehow be higher in the queue than items that do not cause fan out.

There is only one queue item required for anything in the pool.

But if we read that one thing, then there might be a commit that comes immediately afterwards that blanks it.

So we need a counter for the pool items for that thing that are available.

So in order to enqueue in the pool, we do a sum to increase the tally.  When the pool gets processed, we reduce that sum down.

So when you go to pool, if the current pool size is zero, increase the count AND put a message on the queue.  If the pool size is not zero, just increase the count.
Just hard to absolutely guarantee that an action will be dispatched that runs the queue.
After the pool process completes, keep checking that the sum is zero, and rerun if not, untill we error, in which case the message will be rerun.   So we keep trying until we get to zero, or error, which means the next runner will get to zero, since each partial run, we are making actual commits that are valid.

transmission only succeeds when it can definitely say that it increased the value atomically.

atomically apply the sum to the flag, 

Strangely, this method works out slower - this is probably due to the way they decide when to spin up more isolates, by whats in the queue.

Lay down a pool marker - an item that says we want to pool something, so even if our atomics fail, something will remain 

Check the marker only, as less chance of conflict with it.
Make sure the atomics can be replayed lightly, without writing the git commits again.

How can we know what parts are causing delay ? 
How can we measure each step in the queue ?

Is fan out being starved at all, or is queue depth not triggering more isolates, since the isolates appear to be largely idle, presumably using db lookups ?
Is there some parallelism of db calls that we can use ?

What if isolate just processed for that thread as long as it could, until it was exhausted or it got cancelled ?

We need system level branching that is glob based.
Needs to expand over files faster than what using the io channel can manage.
Using io requires an action for ever isolate.  It could still use io, but use fan out branches that have a tuned size that ramp up and then start child processes that have a different parent to them.
System level action to do a while loop or a for loop using an isolate function, which reduces time to do commits, since we can do the fan out without doing any commits at all, relying on the atomic guarantees of the queue.

If atomics waited until the end, it could do all the await conditions it has in parallel ?

Need metrics on how long each isolate is taking to complete queue actions.
Calculate an average along with the queue updates, so we can see how long, on average, each pool, and exact execution, and each branch op takes to complete.

Need to know how many atomic collisions occurred in each queue action - the collision rate per unit time.

Atomics could retry all async checks, and then run again, rather than restarting the whole process ?

Mertics for the delay between putting something on the queue and being processed, so the delay between an execution enqueue and the corresponding dequeue.