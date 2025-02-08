
>[!tip] Created: [2025-02-03 Mon 14:27]

>[!question] Targets: 

>[!danger] Depends: 

make threads, so that when a specific task is set upon, a new git branch is created.

Then knock on / trigger events, where we say things like "if the api changes, re-implment these classes"

Then these would fork off the changed API branch and then try to heal.  They would make their own branch. 

Human would see the combined merge, but could look at individual merges, and kick out or change different merges, which would cause the dependent merges to recalculate.


To work on artifact, we'd pull in the repo, and start asking for the bot to generate individual code files, then write the changes, run the lint loop, run the tests.

Be nice to ask o1-pro, in the workbench, for how to add extra features, given the codebase we are looking at.

Then implement watches that detect common errors from the lint loops, so we can prompt those to not happen, and test against the dataset of when they occured.

Create a test runner app on our local machine, so that it hooks into deno deploy and can perform all the services that are being asked for.

We should always be watching for corrections the human does, and add them to per file, per project, per user, per company, or global patterns that we should add to the prompt.

So the key is that we can make this system teachable, so it can deduce a prompt to ensure that our requests are fulfilled.  When we make the correction, it tries several prompt updates, makes some tests, and checks that if it had the prompt originally, it wouldn't have made that same mistake.

Give it ability to focus in on a specific test, and loop around until it gets the tests running one at a time.

So if we can define an interface we want to meet, and we can write some tests that exercise it properly, then we should churn on the internal implementation to get the best of several runs, so that we can be confident we haven't got stuck on some local minimum ?

We should also ask if the tests are outdated and if they still serve the intent ?  The intent should always be in question.

Maybe start with the tests we want to write first, and then do the implementation ?

Be able to flag files as exemplary, probably by virtue of committing them, so the bot knows it should look to them for examples.  Then it can defend its choices based on these files, which causes you to have to point out faults in the committed files.

Interfaces seem to be like the top level prompts.  If the reasoning is done at an interface level, then the consumer docs can be derived from that with a different tone.  We should allow questions and thoughts and ideas to be treated specially, like the LLM knows how to dawdle and how to respect ideas and not try to resolve them immediately.  The interfaces and how they relate and call each other should be highly documented and reasoned about.  The modularity of the whole project is laid out here.  Then the build becomes very methodical.

New features would be reasoned into the interface.  Keep a log of decisions that were made to change the interface.  Perhaps the folder structure of the whole project could be laid out in the interface layout ?  Scoping the bots to a particular folder seems to have good responses.  Long running triggered threads can keep the interface following rules.  The top level business rules would be stored along with the interface.  The interface design is the specification.

Constant reapers run and look for inconsistencies.  Once these bots are tested a couple of times, they can be set to run on any event.

Refactoring the interface should be rolled out across the repo with full knowledge of how it changed, which makes it easier to figure out how to adapt things.

Concerns or worries can be listed somewhere, and these get triggered by a particular bot too.

The use of flops - make files and functions as whatever the bot felt most comfortable with, and then do presentation transforms, as well as refactoring back to original.  So generate the solution fresh, and only then translate back to the existing one, if possible, since trying to morph directly is too much.

Should be able to flag files or methods as unfinished, unsure - then when we paint things like this, as well as painting things as sure, then the AI uses this as guidance for what to focus upon.

We should be able to zoom in on an individual test file, and tightly analyze it in isolation, as well as the coverage that it generates, so that the human and the AI can verify if it works as expected and meets the style and orthogonality rules.