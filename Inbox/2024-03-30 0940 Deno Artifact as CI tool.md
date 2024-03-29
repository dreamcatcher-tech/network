
>[!tip] Created: [2024-03-30 Sat 09:40]

>[!question] Targets: 

>[!danger] Depends: 

Deno deploy is so fast that it might be good to use that as the CI  test ?
Make a library that you include as a `main.ts` file, and it gets deployed to deno deploy, which then runs all your CI tasks, prints back a nice report. 
Could use massively parallel operations to get all the independent tests done quick.
Use broadcast channels to keep realtime up to date.

Post back to an independent service, or generate a static page of the run, which can be added to a static ghpages branch, or any other thing.  Much like how bench.js works.
Once deno gets certified runners, can also use that as the build step.

Ideally we would use Artifact as the way to marshal this running.
User artifacts RPC to push the changes back to another artifact deployment, or since it is git, push back to the branch you made.
Then we publish a static site that can read from these repos using artifact in the browser, and pull down the data required to build the show page, pulling only the needed data.
Standard artifact charges apply, which should be light, since largely s3 with cloudflare backing.

So we would publish a library on jsr that you make a deployment for yourself, or connect up to our github hooks service.  That deployment is running artifact, and each time you push to your branch, it does stuff.  It can take further actions too, like promoting the successful deployment up to a new deployment with a production entry point, not a CI one.

Let you control multiple artifact deployments live, since you update their chains and they behave differently.  Some faster changes can be done by setting new env vars, rather than relying on a db read each invocation.

We could shard deployments for subprojects, so we can balance the load around a bit.