
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