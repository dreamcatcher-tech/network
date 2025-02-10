
>[!tip] Created: [2025-02-10 Mon 14:23]

>[!question] Targets: 

>[!danger] Depends: 

So long as the paths are all unique, then we can store each transpiled module in an s3 object.

Then whenever we run new things, we pull in these items, along with some cache purge.

So the running of any module should be primarily a lookup function, and if required, a bundling function that can be on separate machines, since it just updates the s3 bucket, and then the waiting job can start again.

So basically the first job should be to detect the graph, and send off a job to bundle all the individual bits, which can go into any machine that is still running.