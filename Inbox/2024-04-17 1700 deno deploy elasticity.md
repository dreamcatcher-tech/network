
>[!tip] Created: [2024-04-17 Wed 17:00]

>[!question] Targets: 

>[!danger] Depends: 

We will always be beholden to the shape of deno deploy elasticity.

How can this be mapped and measured ?
How can we know when we are on a new isolate ?

How do we know we are saturating deno deploy ?  How can we see the queue length ?

How can billing be controlled, so we should stop at a certain amount ?

All these things may be done at once via the sum() kv function.
Every time we add to the queue, increment the number.

Store states in buckets of 1min width.
Know which bucket based on the time.
Present graphs back showing these usage statistics.
If you are the first to write a key, grab the top stats and atomically add them.



Run different amounts of parallel requests and chart it - this is the curve of time taken vs load size.  This should be logarithmic, we would hope.

We might be hitting the queue too often - perhaps a more compact way to load up large chunks of parallel tasks ?
Also getting affinity for some types of message to a particular isolate could help, since ram can be improved ?

Queue size might be quite high - if it is high, then need a way to get more isolates spun up

Run a cron job to pull top stats and store in the db.