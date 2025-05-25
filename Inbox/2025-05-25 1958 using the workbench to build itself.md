
>[!tip] Created: [2025-05-25 Sun 19:58]

>[!question] Targets: 

>[!danger] Depends: 

With simple code control, and a napp to build a dev server, or even just a build server, then we could load up the prototype on the stateboard, and issue commands to get bits of it changed.

then when its build tests pass, hit refresh, and the whole workbench is changed.  Seems pretty wild.

So basically a generalized widget builder tool with a dev server (or just a build server) and then we can build widgets in the workbench, including the workbench.

That lets us chat with it, and have no local servers.

we could serve the static files out of artifact, and then watch for when there is a change in the hosted static files.

so when you change something, this would trigger a napp call that would rebuild the files, and then the static files would change, so then the watching file does HMR.  Is HMR acceptable on production versions ?  we could set a config on the frame to allow updates to be hot, which would typically be disabled, and we would wait to do some testing on our side before allowing an update thru.

seems that iframe makes it simpler to do hmr off static files.

means that the release process for dev is the same as for prod.
Each change can make a quick fast build, and then a long running optimized build, so you can stop at any point, and it will have the prod version.

run a backstage dashboard that monitors build time, and can graph it, and show when build time changed significantly so you can bisect.