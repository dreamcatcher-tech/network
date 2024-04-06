
>[!tip] Created: [2024-04-06 Sat 13:56]

>[!question] Targets: 

>[!danger] Depends: 

We were going to have one of these for each browser window anyway, this just gets used for issuing artifact side effects that interact with the platform too.
1. probe - reads the db state
2. init - uses probe and writes to the db
3. clone - uses probe and an external system call
4. push and pull are the same as clone
5. rm - writes to the db state
6. logs - reads the db state
7. apiSchema - answered directly
8. pierce - the one special case where it is an external side effect

So pierce would guarantee that the action made it in to the system, and would reply with the ulid of the pierce action.  From there, the client is responsible for watching the chain - in fact it should have started watching before doing pierce.  Pierce checks the permissions to see if you're allowed to pierce that particular chain.

? how would I know if clone 
Each side effect needs a cleanup, which gets run at the start, so the process has a chance to restart fresh once it has the lock.  This is a compensation action.  Even if we were executing only once, the op might die part way thru, and so we need to kill it from performing its atomic conclusion, clean up what it might have done already.

? What about if it finished but didn't do its atomic thing ?
It would not have cleaned up its lock, so it didn't finish, and we can simply wipe everything it did.
In the case of clone, we would have maintenance lock on the repo, which is a higher level lock that side effect lock, as it bars any other operations from interacting while in maintenance.



Model is that:
- terminal connects to the platform and proves or creates an identity
- the terminal session creates a session using this identity
- the terminal routes all actions for any other chains via this identity
- The UI may switch to displaying any other item this session has access to

Read access is managed by linking back to the user session, then the identity, then seeing if they are allowed access to a certain part of chainland.

? How will CRM users log in ?
They would have a session chain tied to their identity, and then they would start dispatching actions into the CRM repo.

If the permissions are allowed, the
Whilst the permissions on each chain is different, they are running under the same consensus node, our instance of deno deploy, and so we can move actions around between them as tho they were internal.

Authority of the PID is derived from having that repo name on github.