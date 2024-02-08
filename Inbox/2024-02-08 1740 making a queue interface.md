
>[!tip] Created: [2024-02-08 Thu 17:40]

>[!question] Targets: 

>[!danger] Depends: 

But isn't this just the same as the isolate interface with parameters ?

Is artifact just an isolate, using the exact same tooling ?

The only difference is how it pushes itself into the queue.

? does it need PID info ?

Not inside, but as a branch - so the data isn't happening inside a given chain, but instead is happening as a child chain - the data stays flat and unaffected, but its PID relationship is what matters, and what can set different isolation and side effect access.  The parent sets how to access these resources.

It can derive fs layers from its own one, and it doesn't care how those layers got there.

So the actions would be from the API that artifact would give us, which means the whole deployment could be presented internally like just another chain ?  The isolate, instead of being code, is a remote system.

Writing artifact as an isolate.
Getting actions out just uses a different dispatcher for the actions, namely the kv queue.
The queue listener just uses the same isolate tools to create the function we want, and calls it, with the benefits of being in a queue.

BUT these actions have side effects, since they change the DB ?  No matter, the side effect results are recorded in the fs layer of the device.

To run artifact on artifact, which might be useful for testing, we would simply change what the dispatch function did, and make it use interchain comms.

So all the other chains it runs should be branches off this root chain, which is the infrastructure repo.  This is the boundary of the system.  If we made it a normal git repo, we could trace down what actions happened in it.  But this would provide heavy contention, so it might be a virtualized chain, which never actually does a headlock or anything, unless needed for testing.