
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