
>[!tip] Created: [2025-04-20 Sun 09:59]

>[!question] Targets: 

>[!danger] Depends: 

Making tests that need to interact with an isolated computer are hard, like making some tests that will download vite, run the latest vite starter, import some known problematic packages from jsr, do a build, run the dev server, browse to the test page, check everything is ok.

Repro of such a system can be incredibly hard, but docker offers some clues.

Perhaps a wrapper round docker that assosciates a layer with a test step ?  Like some strong bindings between a test framework and docker ?

Or in artifact, we can do the same thing, but the commands are just napp commands.  We could wrap napp commands to look like docker, or be supplied in the same way as docker.

We can also allow forking at certain test points, so test test test then fork to test independent things.

AI agents that can browse and compare screenshots to the previous version, as well as looping around when they find discrepancies.

Strategy is to break down a page into features, and then systematically compare with the previous versions.  Possibly make a checklist that they dynamically create, that a human can curate.

[[infrastructure repro]]