
>[!tip] Created: [2024-06-15 Sat 10:27]

>[!question] Targets: 

>[!danger] Depends: 

The fact the text output is captured makes review much easier.

Make our own version so we can browse the exact sessions and see them recreated ?

Being able to send a snapshot of an exact session, and then be able to drive our viewer components thru the exact thing the user would have seen should be easy.

If we can load up the session branch, and then manipulate what HEAD is, then we can tick the snapshots along.

So make a commit viewer along the side.
Allow multibranch to be controlled independently and see the impact in the UI.

Mount the app react components exactly as they would be presented in the UI.

Driving the UI would be the same as driving the chains, since they ultimately result in a prompt being inserted into the session.

We actually want a specialized test runner, so that not only is the UI shown, but the ai responses are shown.  

Be able to flick thru large numbers of synthetic tests to see what the response was in the UI.

Need a level higher - a stats dashboard that shows the combined results of all the synth inputs and appraisals.

[[2024-06-10 2205 cypress testing]]

BUT we might be able to test the deployed pages for functionality.

Hook up something in cypress to do appraisal of the results being something like what we would expect even tho not exactly.
Test github login loops ?
So the tests we use in development could be applied to the production or staging deployment, and pass or fail.

So it might not be good for the testing of integration with other services, like fetching web pages.
Help with assuring quality on each release, since we are not releasing different UI elements for different customers, and it all works the same way.