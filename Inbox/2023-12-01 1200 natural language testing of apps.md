
>[!tip] Created: [2023-12-01 Fri 12:00]

>[!question] Targets: 

>[!danger] Depends: 

Benefit to us is far more thorough testing of our app, for far less effort, with the capabilities described in natural language, which can be agreed on with our customers.

So we're sort of dropping down with a platform, and app, and a project management technique.

Could simply start with time and materials, and we will try find others with the same problems to split the costs with.  Place a spend cap and see where it goes.  If you stop paying we might still provided fixes, but no guarantees.  We want to invite others to solve the problems instead of us as we have other things to do.

We would be able to have AI process the NL user stories into a standard format in markdown, or some other text format.  This is what it uses to reliably rebuild the doc.  When processing a new doc, it might ask some questions to figure out what the user meant if the user has supplied their own format.  Once in its reference format, it would be able to generate a UI that looks like jest tests, and show the execution progress of each item, which the history of which could be viewed visually to understand what happened.

Running this on commandline would generate a pulseId that would be loaded up into a viewer to consume the results more visually.

This tool would be able to help with partially defined stories, stories that began with just a capability.  It could them generate a series of scenarios to test this, then it can make those scenarios orthogonal.

this testing should be goal based, where we are testing ability to achieve certain goals, and testing overcoming obstacles within.

The testing app would be generating new chains when it is processing the instructions.  It would try to fit things to existing chains to give some continuity of history.

Could use .md for the spec, and then insert badging the links to the chain that did each run, so we can browse it and open up the UI easily.

These competencies can be uploaded as a large embeddings document that hints at how to go about doing something, so any time HAL gets stuck, it can analyze some of the tests that were run so it knows how to get past a stuck.