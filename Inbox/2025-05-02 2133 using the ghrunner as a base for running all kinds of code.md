
>[!tip] Created: [2025-05-02 Fri 21:33]

>[!question] Targets: 

>[!danger] Depends: 

This machine already provides isolation.

These environments already have actions that set them up, so we could just use this infrastructure to provision machines in certain environments that exactly mimick ghactions to make migration easy.

This is the place to go to stay up to date with container images:

https://github.com/actions/runner-images

then we just deploy these as the foundation for what napps run on.

gvisor seems the way to run multiple processes.
not just for deno but also for any other language.
can run many of these in each machine, which means we can pack the machines more densely.