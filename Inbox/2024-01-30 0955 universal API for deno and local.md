
>[!tip] Created: [2024-01-30 Tue 09:55]

>[!question] Targets: 

>[!danger] Depends: 

The problem with deno deploy is that running locally seems hard, and making a progressive app seems not possible.

> If we make a universal API that can have its backend served by local, brower, p2p, or deno deploy, this is the best way to operate. 

This API should deal with files, json objects, 

So the front end has some smarts, in that it fe

This DSL would be only the operations we care about, like commit, file changes with streaming, branching, tracing, rerunning.

Ultimately, people would write their apps, and it would be hosted by us on this deploy cloud.  Our own operations would run at this large scale, in this large cloud.  Hopefully we can have the deployment and testing steps managed from within this cloud.

Ultimately, we want to replace deno deploy with our own fabric, managed by artifact chains.

Local version would run deno, and would present a web interface that used local fresh installation to keep the UI hydrated.

If we use webworkers in deno, then we can use these in the browser too, and get some performance gains.

Layer for the underlying infrastructure, including threading and fs.  Layer for the git operations, then layer for our DSL - the execution layer, then a presentation layer atop that.

We want the users to view deno deploy as their own personal hypercomputer, always on, always performant, always available, and their browsers as a lightweight view into it.

The isolates should collaborate with user supplied isolates too, so the user can run the service anywhere they please.

Describe the features of our DSL in a cleanly documented way, so that they can be managed as AI documents, as our core featureset.

Routes in the front end should resolve to branches, and provide viewers that let you look inside them, whilst streaming down the commit information.