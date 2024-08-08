
>[!tip] Created: [2024-08-08 Thu 13:43]

>[!question] Targets: 

>[!danger] Depends: 

Any given system needs a standard way to represent roles, so that in testing we can assume certain roles.

Or, we could have a bunch of named actors, then while we are running as the superuser, prompt the system to appoint certain roles to certain actors.
This means that an app can have any role management it likes, and we just provide as many participants as the tester would like.

At that point what is the expectation ?
Tests should inherit the state of the previous test, and then run some prompts that surface info into the thread, and then the expectations run

When we have dependencies between tests, we would then take snapshots at these points, so they used a commit to start later tests.

? how do we switch between actors and control how that worked ?
? how to verify the agent switching went as planned ?

So we would have a particpants clause, and then switch between them.