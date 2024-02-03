
>[!tip] Created: [2024-02-04 Sun 09:39]

>[!question] Targets: 

>[!danger] Depends: 

Rules must be super simple, also recoverable, and reduce lock contention.
They should take advantage of the fact that many actions do not need the filesystem, and so don't need the full git checkout, or even the full git repo to perform their actions.

If the rules are that for each IO


## Pooling of multiple dispatches from clients
If a client dispatches many requests, they should have some kind of pooling.
Dispatch into the kv store, and then dispatch a process action to trigger induction ?
Or just wait for the branch lock and insert it yourself.  Wait until the branch lock is free and check if your action got inducted or not.

Pooling of multiple merge requests

Locks quickly available by listening to keys instead of polling

Reaper kv queue to do cleanup actions if something took too long.