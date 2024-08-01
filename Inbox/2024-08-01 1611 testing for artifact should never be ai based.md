
>[!tip] Created: [2024-08-01 Thu 16:11]

>[!question] Targets: 

>[!danger] Depends: 

We should not be relying on AI calls to be made to test parts of the system.  We should be mocking the calls, and then running tests in the HAL repo.

The testing framework needs to be HAL native, so that it can run as an artifact app, and be testing using NL monte carlo.

Dashboards for bots should be in terms of probability of integrity / correctness and shape / presentation.

Tests should be separate out to penetration tests vs normal operations tests.