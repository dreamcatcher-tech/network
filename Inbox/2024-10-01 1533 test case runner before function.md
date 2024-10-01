
>[!tip] Created: [2024-10-01 Tue 15:33]

>[!question] Targets: 

>[!danger] Depends: 

How to en

Change so the test cases either get all run, or can be run individually ?

If we are manually triggering a test run of a single test case, then how can we find if the before function was already run ?

So if the tests are run as a whole, the before functions are 

Set the before info in the tps report, to make it easy to programmatically ensure before has run already.

If before is already running, then we would await its 

Tps should store the commit of when a run finished.  If there isn't one, then we will run the before items first.