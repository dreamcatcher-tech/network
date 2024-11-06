
>[!tip] Created: [2024-11-05 Tue 10:39]

>[!question] Targets: 

>[!danger] Depends: 

Calling definitely needs to send in some files in a snapshot.

It only needs the files when it makes a read call.

Write is done by an action too.

During the course of execution, the fs might change, altho the initial version should not.

If it needs starting files, then it needs a filesystem snapshot sent in ?
Or is the fs snap only needed to reconstruct files on demand ?

There is some proxy thing that sits between the compartment output and the exe output, which inflates filesystem requests.

This is the thing that uses the snapshot.  When an action comes out to read things, then the fs snapshot gets called upon to resolve.

So the fs doesn't go into the compartment, but when the actions come back out, they get run thru a fs resolver that does that for you.

The json function framework converts external function calls into actions, and then interprets those actions, giving back a response.  This does not work well for streaming, so do not do streaming.

How does a remote branch that is not an exe branch get read from ?

So the fs thing would have a range of actions ?
The napps interface would be used to create the actions that the runner thing would handle.
Means the fs json function interface can use the same tooling as everything else.

Could push the fs resolutions into the Trail object ?

Or, pass a resolver into the compartment ?

No point doing the resolving if the execution is cached and doesn't need it.