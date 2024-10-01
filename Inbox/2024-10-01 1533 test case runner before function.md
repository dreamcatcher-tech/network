
>[!tip] Created: [2024-10-01 Tue 15:33]

>[!question] Targets: 

>[!danger] Depends: 

Change so the test cases either get all run, or can be run individually ?

If we are manually triggering a test run of a single test case, then how can we find if the before function was already run ?

So if the tests are run as a whole, the before functions are looked up in the test cases.

Set the before info in the tps report, to make it easy to programmatically ensure before has run already.

If before is already running, then we would await its completion ?  Or just run it again.

Tps should store the commit of when a run finished.  If there isn't one, then we will run the before items first.

befores that use multiple calls, and stack them on top of each other.

Runs should be submitted in bulk so we can sort out the order using the case runner.

We would never use stale runes, but would rather generate them all, so runs should have the cases put in, or the order we want to run them ?

Test runs singular can be run, or run them all can be used.

ConfirmCaseCount should cover the order check of the test cases too.

Creating the test report should require the befores to be called in order.
Incrementally creating the tps report should be key.
Allow the befores to be in any order, but when confirm is called, the order is checked.
Incremental is best, since means it can always be schema correct.

If there is a case that has run before, fork from that.  Else create a new one.

Should we just run the before tests again, from scratch ? they are not meant to be a time saving gesture, rather a correctness gesture.