
>[!tip] Created: [2024-11-07 Thu 13:57]

>[!question] Targets: 

>[!danger] Depends: 

If the client did a receive, it would be waiting for an action to come in for it.

This would allow the blockchain side to control something in the browser, or on a client machine.

exit, which terminates the current thread.

kill, which terminates some other thread.

daemon would cause the process to be moved to be a child of the init process.

We should be able to make a reasoned document that maps traditional process control functions to our api, and explain why the differences.

The doc should survey all known popular versions of multithreaded computing, both single machine and clustered.  It should break down to the fundamental features of all multithreaded multiuser systems.

Then say what is different in content addressable systems.

Show how we implement the core features.
This would make a great intro to the programming model.
Plus the bots would understand it strongly, since the relationship to things it knows is powerfully strong, and it relates to all the things it knows about.

Relate to all multithreaded programming paradigms.  Make sure we nestle inside a universal one that is acceptable to all the languages.
Write demo apps that use all the features and show how they work.

Inside the execution branch, hold lock on the data branches, so that threads do not collide and need merging.

We cannot have shared memory since we want to run with massive parallelism.