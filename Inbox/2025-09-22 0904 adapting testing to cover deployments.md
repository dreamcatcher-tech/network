
>[!tip] Created: [2025-09-22 Mon 09:04]

>[!question] Targets: 

>[!danger] Depends: 

In fly, being able to spin up a new org, deploy the whole app, and then run integration tests where we drive the system externally and verify that:
1. our code works
2. fly's infrastructure works as expected

this automated check process should work without incident before we roll the setup forwards.

Complication is that we need the apps all working in concert ?
Or, we narrow down how they interact to be the minimum possible, in which case we don't really need testing other than ensuring the interface contract is met.