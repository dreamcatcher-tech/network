
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