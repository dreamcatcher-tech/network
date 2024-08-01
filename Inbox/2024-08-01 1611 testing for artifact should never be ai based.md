
>[!tip] Created: [2024-08-01 Thu 16:11]

>[!question] Targets: 

>[!danger] Depends: 

We should not be relying on AI calls to be made to test parts of the system.  We should be mocking the calls, and then running tests in the HAL repo.

We should not be relying on the ai calls to test artifact in any way - artifact is purely mechanical.  It should never rely on external prompts to get its job done.

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

if plain backticks are used, the text is an instruction to the bot ? or if we prefix it.

Need to make a bot that can generate these things, and provide help on these things, like a ruleset.

Maybe its time to publish to jsr, and run the HAL tests in CI when things change there ?

Go work in the HAL repo using AI tools to execute the testing framework, and to write / improve parts of the system.
Faults would mean we need to exercise artifact differently.
The only difference is being able to trigger an isolate run to do the testing from inside of artifact.
It should be able to focus in on a specific test, sort all failing tests, rerun on change, and let you chat with the tests to change them, chat with the agents you are modifying, and have tooling to attempt to automatically improve the prompts to improve them.
The CI testing would be when we pull into artifact, before updating everything, it would run the CI tests.

The externally owned account that triggered an action should always be tracked, as this is who the bill is being sent to.  They should be able to hit stop at any time, and it would halt all action.  They should also be able to see the fan out of all consequential actions that occured.