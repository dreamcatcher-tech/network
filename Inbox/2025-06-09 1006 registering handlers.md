
>[!tip] Created: [2025-06-09 Mon 10:06]

>[!question] Targets: 

>[!danger] Depends: 

If a file is asked to be navigated to just by passing its scope, whilst we would permit a suggested napp, ideally it is up to the containing system to select how to handle that.

It might go browse the napp store ?

could register on a per repo level ?
installing a napp registers it to handle certain paths, or certain file types ?

so for the home repo, we could sit atop all the navigate to calls, and override what the repo had installed, if we said we preferred to use our own handlers ?

The files app should show the registered handlers for the file, and you can select which one you want.

There should be a handler that is the "choose what to do" handler, where it acts like an intelligent handler.  Stops the problem where multiple apps are registered for a given file type and its hard to choose when to use which one plus the apps compete for that space.

so we'd have some standard verbs, but then napps could add their own ?

we should just copy the mailcap file format, since this is simple and plaintext.

