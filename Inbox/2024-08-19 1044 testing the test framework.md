
>[!tip] Created: [2024-08-19 Mon 10:44]

>[!question] Targets: 

>[!danger] Depends: 

If we ran the whole test framework as a test, how can we mock its running so that we do not create tests within the testing framework ?

The test registry should be relative to the calling branch perhaps ?

Or, running tests should create a mock actor.


Running the test creates a fake actor, and a fake installation of HAL if needed ?
Else the agent goes to run, and it makes some function calls that cross branches.

Or mock the function calls.

Or allow some params to be set by config, like the test registry branch, the test registry function.