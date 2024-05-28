
>[!tip] Created: [2024-04-23 Tue 08:43]

>[!question] Targets: 

>[!danger] Depends: 

Having something that runs exactly once is tricky.  We can ensure that db records are only updated by one instance, but worst case we might have a side effect run twice.

If locks are eager then we have good resilience

If locks have to be waited for, then we need to ensure restart occurs.

Middle ground is a pulsed lock, where it has a heartbeat that if it fails, the lock is broken.

The heartbeat can be a queue message that is atomically sent if the pulse counter is incremented correctly.  Or, just send it twice since it should be idempotent.

If the process dies, it *might* have sent twice.

We should let the system do network things atomically - like only start this process if we still have the lock.  We can do this by wrapping fetch, and adding an abort signal in it.

We would watch the lock, and if the lock gets broken we abort immediatley.

Maybe the lock should be exclusive, in that it needs to timeout before it can be released.
Lock holder will have a setTimeout that re-ups the lock every few seconds.
Then the repo lock can be used by side effects.
Possibly a queue can form to acquire the lock.

Await repo lock seems different to side effect lock.

Waiting for the db to give the result back seems fast enough.