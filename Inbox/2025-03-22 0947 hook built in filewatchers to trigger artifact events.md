
>[!tip] Created: [2025-03-22 Sat 09:47]

>[!question] Targets: 

>[!danger] Depends: 

If we overrode the system level checkers, like deno has watchFs, then we can convert those into artifact hooks, and so writing an app that waits for a filesystem change becomes trivial and reliable, since you are guaranteed to get a callback once you register.