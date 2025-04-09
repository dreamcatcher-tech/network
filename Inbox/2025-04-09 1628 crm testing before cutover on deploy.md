
>[!tip] Created: [2025-04-09 Wed 16:28]

>[!question] Targets: 

>[!danger] Depends: 

First up, we'd do a test deployment and run the end-to-end tests from the GitHub Actions runner, which will act as the web client. If that passes, we then move on to the next step which is for the production environment to be tested for upgrade abilities.

We would deploy another test version and point it at the production database. We would fork the production branch and only interact with that particular forked branch. We would then run tests on that forked branch, which may include allowing a UI to come in and work with it. Only if that passes would we deploy to production and allow the roll over to the new code. 

The forking of the production branch should be possible to do within the UI if you just wanted to experiment with actually doing something in the app. It could be used for users experimenting or it could be used and tagged as such when the UI is about to be upgraded and we want to see how it works with the live data. 

From the repo's point of view, these branches look like any other branches. This test deployment that has not cut over yet is simply acting as the driver or the hoster of this new branch. When you're in that new branch in the UI, you can further fork from that to test different things. Again, the signal to upgrade might even come from the current running production app, which would allow it to gracefully shut down anything that's in flight. 

