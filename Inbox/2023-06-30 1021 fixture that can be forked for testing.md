
>[!tip] Created: [2023-06-30 Fri 10:21]

>[!question] Targets: 

>[!danger] Depends: 

In jest, we often want to prepare a deployed application instance, which can take time.  This should be able to be snapshotted, and then reused in multiple tests, possibly in parallel.

If we provide a function like hardhats `await loadFixture( fn )` then we can provide a fixture that can be reset indefinitely to let different tests interact with it.  Means tests relying on complex chain state can be quicker to load.

Must be able to run in parallel.

Surely there is some standard feature set of tools that we can fit inside of so the switching from other blockchains to ours is not so hard ?