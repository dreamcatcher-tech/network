
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
- test run - a branch where one or more files are asked to be run, and can be changed and rerun.  A place where experimentation occurs.  It knows where it was requested from, and is a randomly generated ID.  The current target files in the workbench are changed for each test cycle.  The workbench controls the invocation of runners for the individual test files.  Capable of running multiple executes of tests concurrently.
- test suite - the group of tests described in the .test.md file
- test case - an individual test case in that .test.md file
- iteration - an individual run of a test case.  multiple runs combine with variance to give a tps report
- tps report - the outcome of a test run.  Lists all the test files used in the run and shows the run status and outcomes of each one.

From within a run, how would we scope down to single file and focus on it ?
Request to manipulate the running on that one file would go from the runner branch, and would use the state of the runner to control what to run.
When a run of an individual file completes, the tps report is copied back into the runner branch.

? how would we retrieve prior runs for an individual file, if the patterns for whats included in the run have changed ?
Designed so that when you're running, you
But if each testfile had its own tps report, then we could fish up prior runs easier ?
But we would still be inside of the same run session, since no deliberate sharing between branches.
Workbench file could be something like a manifest, that lists the parameters of the test ?

Need to have a handle on a workbench to be able to run tests.
Workbench can be told to run 1 or more test files, and can be told to run 1 or more test cases within those files.
A execution of a collection of test cases is called a test run.
A test run will generate one tps report per test file.

? should the tps reports be able to cover multiple files in a single file ?
Seems very messy to do this.

Workbench interface:
- execute( globPatterns: string[],  )

Test Planner is called by the workbench, and is given all the files to run.
It is called in its own isolated branch.

Files are always controlled by the caller and can be set to anything in the run branch.

Either going to be individual files, or run via a controller type thing.
The controller would be able to run batches of runs, doing things like linear, or parallel executions.
A Widget that can read the controller file, would be able to read the files that were executing, and would look up the TPS reports for display.
When loading a specific tps report, you could rerun the test, and this would cause the controller to tell then task runner to do something.  So the widget controls the task runner by talking to the controller, since the controller tracks it all.

Test controller actions are async tho, and the test runners.
Test runners break up the job further into each individual case

- controller gathers all the files together required to execute a run
- controller starts the runners for each test file
- 

A watching run is one where the files are being edited and the tests need to rerun if they would have been affected by those changes.

- Create the tests branch if it doesn't exist.
- In there, start a run controller if we don't have one already.
- The controller manages a collection of runners, with one runner per test file

Test branch has files that track all the running test invocations for this actor, so the actor can easily see every single running test .
