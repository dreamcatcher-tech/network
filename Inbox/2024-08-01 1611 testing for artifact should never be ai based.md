
>[!tip] Created: [2024-08-01 Thu 16:11]

>[!question] Targets: 

>[!danger] Depends: 

We should not be relying on AI calls to be made to test parts of the system.  We should be mocking the calls, and then running tests in the HAL repo.

The testing framework needs to be HAL native, so that it can run as an artifact app, and be testing using NL monte carlo.

Dashboards for bots should be in terms of probability of integrity / correctness and shape / presentation.

Tests should be separate out to penetration tests vs normal operations tests.

Tests should allow:
- no prompts
- a collection of one shot prompts
- a chain of prompts
- a collection of chain of prompts
- a mixture of chain of prompts and one shot prompts
- generative prompts that use an AI to generate a response based on what came before and some instructions

if plain backticks are used, the

Need to make a bot that can generate these things, and provide help on these things, like a ruleset.

