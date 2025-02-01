
>[!tip] Created: [2025-02-02 Sun 09:16]

>[!question] Targets: 

>[!danger] Depends: 

The code feedback loop is nice, but it is somewhat clunky to work with, and then to deploy.

If we could somehow have a serverless environment running where your code changes updated the real thing, and then publishing was just changing a pointer, rather than a build step.

The change is that writing the code ourselves just isn't going to happen often, and so we need single run things, rather than long running things.

If we use the artifact model, then the pages can just be the serving of static artifacts, or the running of serverless functions in a serverless function environment like lamba, which can deal with functions being inside of git.

This removes the need for web containers completely.  We need then, an interface like firecracker for running dynamic code, that is hosted on git.

We might lose hmr momentarily, but we could run a proxy for that, so that the published code changes were intepreted and hmr'd in.  This should run on the client, since it would be the least work for us ?

the trend is definitely towards less framework, since the frameworks no longer save time, if the LLM can just output the raw js code, and doesn't care how verbose it is.