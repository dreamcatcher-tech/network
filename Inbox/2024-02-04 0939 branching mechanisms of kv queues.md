
>[!tip] Created: [2024-02-04 Sun 09:39]

>[!question] Targets: 

>[!danger] Depends: 

Rules must be super simple, also recoverable, and reduce lock contention.
They should take advantage of the fact that many actions do not need the filesystem, and so don't need the full git checkout, or even the full git repo to perform their actions.

If the rules are that for each IO

Each branch only tracks its unique children, to avoid bottlenecks.

## Pooling of multiple dispatches from clients
If a client dispatches many requests, they should have some kind of pooling.
Dispatch into the kv store, and then dispatch a process action to trigger induction ?
Or just wait for the branch lock and insert it yourself.  Wait until the branch lock is free and check if your action got inducted or not.  This model acts more like how we expect everything to be in a chain, including actions from the user.  But there was always pooling of some kind, and so the kv store can give us that pooling, with as few rules as possible, if only pooling raw actions was the same in some way as doing branching or dispatching actions across branches ?

## Pooling of multiple merge requests
If a thousand spawns are triggered.

Locks quickly available by listening to keys instead of polling

Reaper kv queue to do cleanup actions if something took too long.

## Test with a spawn rate benchmark
Test using single thread spawning as many as it can.
Test using threads that spawn x new threads which spawn x more, until some limit, then shrink back down to zero.