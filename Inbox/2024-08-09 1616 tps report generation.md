
>[!tip] Created: [2024-08-09 Fri 16:16]

>[!question] Targets: 

>[!danger] Depends: 

The synth handles reading the files, talking about the files, and reporting on tps reports.

When it gets told to run a test, it calls the test manager, which manages creating the tps report / blanking it if it needs to start a new one, then the test manager starts a new thread for each test using the test runner.

Inside the test runner, a bunch of concurrent threads are set up for each variation.
When each one completes, it writes directly to the tps report that it was given access to, which avoids cross threading.
They write in any order.



Get progress would check which tests were running.
In thread we keep track of what is running.
If a second tool call kicks off, then we would cancel the current running one ?

Is there a test branch that all tests run in, or is it limited to the current backchat branch ?

Should it be an actor level branch ?
Test as a branch at the actor level, then child branches that run for different files ?
Otherwise the test is only accessible from within the current user branch, and may not be long lived.

Is testing an app, or just a branch ?

Testing is an app that is built in to HAL, and it runs in its own branch.
Inside that branch, 
Test is an app, but it is built in to HAL.

The test agent if needed, can start a test manager branch going, which is `main/actorId/testing`
Maybe threads should be under the `main/actorId/threads/` path too ?
If the branch path mirrors the filesystem path, then no collisions ?

In the test branch, we track how many test runs are currently running, and what tps reports have been created.
We sync with the main branch regularly.
? how to make modifications in a local branch, and then run these in the testing branch ?
Do we want all tests that any user branch ran to be visible to all ? yes, same as how threads are treated.  A thread is not a child of backchat, but a peer.

These operations need to be async, so the test starts, and you can watch the progress in the stateboard, but you can continue on and do whatever you want whilst it is running.

If there is not test manager started for the actor, create one - this is part of the request to the manager.
Start a new session or continue an existing one.  The session is named randomly.
Provide new files based on the thread branch that is calling the test service.
This will give back a test session branch PID.
Inside that session, you can set files to be run.


If passing a glob, it is taken from the snapshot we have of the files.
The manager takes this request, starts a new branch to start a run in 

The manager can be told to pull from the home dir, so run the tests on the reference copy, rather than a temporary copy.
Each session starts a new thread, and one tps report per executing file is made.

Objects are:
- workbench - a branch where one or more files are asked to be run, and can be changed and rerun.  A place where experimentation occurs.  It knows where it was requested from, and is a randomly generated ID.  The current target files in the workbench are changed for each test cycle.  The workbench controls the invocation of runners for the individual test files.
- test suite - the group of tests described in the .test.md file
- test - an individual test in that .test.md file
- iteration - an individual run of a test.  multiple runs combine with variance to give a tps report
- tps report - the outcome of running a test suite.  One tps report per test file.
