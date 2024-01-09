
>[!tip] Created: [2024-01-09 Tue 14:19]

>[!question] Targets: 

>[!danger] Depends: 


It will be a long term solution to load the actual executable code from the filesystem.  Probably needs a bundler to run in the browser, or at least supply the bundled version in the git fs.

In webworker, we can use dynamic imports and override the self.importScripts function, since that should get recursively called.

In nodejs, we can maybe proxy the built in FS object ?

In debug, need to make the code run in the main thread, so we can swap it out, but so we can also run the debuggers on it in that mode.