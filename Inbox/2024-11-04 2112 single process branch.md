
>[!tip] Created: [2024-11-04 Mon 21:12]

>[!question] Targets: 

>[!danger] Depends: 

To do this, we will have to execute some of the action too.

The problem is, at what point should we amplify out, and at what point continue on ?

When there is a side effect, we definitely have to commit there ?
Could just not, and then replay the whole thing including the side effect.

Side effects could be a separate branch, so they can all be done together, and can avoid getting replayed just because of a race condition on one of the branches commit processes.

If the action can be run on the current thread, we should make some cost calculators, and then allow a certain amount.  Say, 10ms of compute time per action total, and once we go past that, do a commit.

Then we would send off another action to carry on in this linear fashion.

So the tension needs to be glanceable, and easily extracted.

When to fan out, and how to assure that our starting thread will not collide with their commits ?
If we are still one for one with the actions, then we should continue to do them, and if we run out of time, do the commit and send a single action out.
But if we have fanned, then we should send two actions out ?
Basically if we're talking to two different threads, then we should send two out.
Can make each thread aware that there are competing runners, and so as not to collide ?

Use the db for thread coordination,

System to allow cooperative parallel commiting if we mark the pool items as partials, then new actions will only pool the items not in the partial pool ?
But this is susceptible to delays during recovery, which we do not want.

Storing tension
If each IO.json tracks if its children have tension, then we can walk the tree down.
So any change to a child ripples up to the parent at the top.
BUT if we track all the external actions coming in, then if these are unresolved, these are the only things that can be causing actions.
We could mark if they are under tension, or waiting something external to happen.

The proc branch could be related to a single terminal session, or to init, or some other kind of demarcation.  This means the chance of collisions while calculating it are much smaller than the full system.

Its almost like a lightweight thread vs heavy.
We should be able to nest these threads, based on usage.

