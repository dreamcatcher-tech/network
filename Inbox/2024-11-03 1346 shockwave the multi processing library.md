
>[!tip] Created: [2024-11-03 Sun 13:46]

>[!question] Targets: 

>[!danger] Depends: 

Be able to generate loads on deno deploy so we can benchmark its performance.

Know how to batch things up nicely, so if it got 100k actions, it would use scaling actions to break that into chunks.

Might be filesystem aware, so it can read from the fs to get its instructions via some plugin, rather than having to transmit all the seed data around - should only be transmitting the pure start instructions.

Dashboard to show its peak performances.

? some way to know its live performance by storing some metrics somewhere ?
chunk metrics too, so can say how many chunks there are in the queue and what

chunk counter, which is messages that are unammplified.  Allow for nesting of chunks too.

Queue length parameter, so we know the total queue length.

If we can avoid having to make a new thread for each operation, that can save a lot of time too.
So if the shockwave library can be called as a napp, and it is given a set of globs, and some function to run on each instance, then it would do all that and only report back when it was done.

The results would be deterministic.

Is it about running napps exclusively ?

Features:
1. Deterministic output
2. rapid online of parallel workers using various techniques


Can we use shockwave to run variations during evals, rather than creating a new thread per execution ?
It might be faster than bottlenecking thru the proctree.

Be great if we could stream the actions, so instead of creating all the workers upfront, start them as soon as we know any of them, so when walking a filesystem, we would stream in the files, and dispatch tasks as soon as we were aware of them.

The creation of the tasks can cause isolate timeout, so we need to batch that somehow.

Pool processing might be done up to some compute limit, where the commit is made and the instruction to the queue to amplify is sent off, rather than doing all the work, to avoid timeout of the isolate ?

We should on the artifact side, decide how to shard out the tasks, and then send those instructions out.  The shockwave call would work out how to make the individual instructions for shockwave, and would create an array of them all.

The array would get parsed by shockwave, which would then break the task up into batches, as much as was required.  It might write the full array to disk, or at least using batched atomics until it was done.  Then amplify it.

In regular calling, shockwave would be called with the resulting executions that needed to occur as a result of all the tension in the thread complex.

? Any speedup by writing the tasks to disk, and then reading them, rather than writing and rewriting each time a new batch cut is made ?

So write the task list to disk, then trigger all the queue actions to read from that, which should be faster than rewriting all the time.  This initial write can be used for stats too ?

If the jobs hold binary data, this might need special treatment in some way, maybe writing in batches ?