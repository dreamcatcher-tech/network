
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



What we really want is each request that comes back to include the stats about what it caused - how many deno credits, how much storage, how many AI tokens, how much the users account balance was affected.
Delete branch should free up energy.