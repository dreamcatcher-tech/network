
>[!tip] Created: [2025-01-24 Fri 22:51]

>[!question] Targets: 

>[!danger] Depends: 

I can imagine a tool where I go into StackBlitz, I download the project code into a zip, or I push it, commit it up to GitHub. Then I go into Artifact. I have a small program that either unzips the zip and it makes a new commit into a repo that we're hosting, or pulls down a repo from GitHub, plus it may have some webhooks to auto-update, and then O1 crawls over the whole thing and provides focused architectural advice for what to go and prompt back into Bolt.new. Plus for some of this work it might be able to do it itself, and we can work our way up to having these tools available, but really the trick is to get high-level architecture done by something advanced like O1 Pro, where you're running a distinct refactor operation on the code base, as opposed to sitting there waiting for instructions from the human. The bot knows better about how to refactor, and so it generates a list of tasks for the smaller bot to complete. These tasks can be staged and broken down so as not to overwhelm the little bot.

The key to working with AI code generation seems to be the definition of a pattern that you want to follow, which should be laboriously worked out. Once it is defined, it becomes part of the docs. Pattern-based code is easier for the AI to generate from. 