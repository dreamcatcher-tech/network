
>[!tip] Created: [2024-04-29 Mon 15:44]

>[!question] Targets: 

>[!danger] Depends: 

Inside the io.json config, we should be able to signal some pre and post hooks in the form of isolates that will be run before any actions are processed.

In this way, we can allow user sessions to do a merge in of main before they do any action.

Sessions are there so that everyone can see which user and which session was used to do what actions.

The hooks can be stacked in arrays, and have globs for matching things like function names or isolate names.  Special filters like payload size, rate of requests, and other meta related filters can be applied.

Then they all get executed with almost no overhead since they are running at exe time.

We could export an isolate that did all this, including provisioning by default, which would represent the multiuser app interface.  Covers installing the app, advertising the connection url in a dns style naming service, users creating user accounts, authorizing with github, creating sessions, and admin tools like severing sessions, allowing in completely foreign sessions.

Also as with permissions, can reject actions by pattern, like origin branch, so we can rapidly discard illegal actions in the system.

So long as someone is getting charged for illegal attempts, then we should allow them to be done as much as people want.