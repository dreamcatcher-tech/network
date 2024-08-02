
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
- setting the filesystem state for the tests, which is reset each run
- mocking the isolate functions that get called whilst allowing some functions to execute unimpeded

Should allow for parallel test execution, for rapid speed.

if plain backticks are used, the text is an instruction to the bot ? or if we prefix it.

Need to make a bot that can generate these things, and provide help on these things, like a ruleset.

Maybe its time to publish to jsr, and run the HAL tests in CI when things change there ?

Go work in the HAL repo using AI tools to execute the testing framework, and to write / improve parts of the system.
Faults would mean we need to exercise artifact differently.
The only difference is being able to trigger an isolate run to do the testing from inside of artifact.
It should be able to focus in on a specific test, sort all failing tests, rerun on change, and let you chat with the tests to change them, chat with the agents you are modifying, and have tooling to attempt to automatically improve the prompts to improve them.
The CI testing would be when we pull into artifact, before updating everything, it would run the CI tests.

The externally owned account that triggered an action should always be tracked, as this is who the bill is being sent to.  They should be able to hit stop at any time, and it would halt all action.  They should also be able to see the fan out of all consequential actions that occured.

Need to haul in files to the tests.
Specify a github repo or a section by way of a PID:
- path or glob or array of globs
- repo name in git
- optional repoid
- commit
So when running the test suite, it first provisions the system using the parameters given to ensure the files are correct.  If nothing is specified, it assumes the tip of the filesystem it is running in now.

HAL is intended to never contain any actual software code - it is to be pure NL.

So artifact would need some tools for testing it could run and interpret NL test specs correctly.

If we can get a full NL development loop going, where NL apps are produced using NL assistance at all steps of the way, we can avoid the human effort of typing, and the specialized environments like vscode required to run these things.

Is the CRM to be a completely separate repo to HAL ?
So long as it is written as pure NL, that should be sufficient for us to work on without compromising our goals.
? Then is each instance of the CRM a dedicated repo too ?
Surely these would be a fork, so they remain able to merge in upstream changes ?
Each one should have a base branch that was unique to it, too, so that a company can have several different CRMs but all with a different base branch, rather than a whole lot of separate repos ?

So the artifact tests should never need HAL to be cloned down, and should always be bare ?
Or, just test the basic deployability of the system, but never test the AI functionality of the HAL repo.

Can all stories be designed in this way ? Can the CRM be fully defined in this way ?
What about testing of widget inputs, like searching for customers ?  We can only test the prompting, and widgets need to supply a specific type of prompt input.

Tests seem independent of the business rules ? As in, we can write a test before we have the business rules set up.  So we might be able to infer the business rules from a test ?
Are the tests actually the business rules ?
Definitely the user stories should be used to generate tests ?

Need a scenario setting before / beforeEach to indicate what the initial state of the system is before the tests are executed.  Maybe one scene per file is permitted ?

Making this testing framework should be very quick, 
There is the runner, and also the constructor, which are independent.
Then the reporter is in charge of generating and sometimes saving results.
Can save timing info too to get speed indications and stats between runs.
Benchmark info can include token cost, number of commits.