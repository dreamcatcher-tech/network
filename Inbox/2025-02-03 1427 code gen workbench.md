
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