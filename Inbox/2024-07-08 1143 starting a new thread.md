
>[!tip] Created: [2024-07-08 Mon 11:43]

>[!question] Targets: 

>[!danger] Depends: 

By default backchat should start a default thread, unless told otherwise.

That thread is what would be focused.

Scoping a threads file access is done at the branch level, not within the thread file itself.

Remotes could be in their own folders, so that all the threads backchat needs to concern itself with are in one structure.

If we copy the remote session file in directly, then we can't hold its reference
Unless every thread holds its owning item internally ?

So remote files from other repos should be held together by submodules.
But we do want it stored in our repo so we can index it and search it, even if we lose the remote repo, since we only have a sparse checkout, and we need a way to bind the repos together.
Submods are only for dirs tho.
subs should be a flat list of remotes, and then the session would point to a path in this submodule folder, which acts like the network socket.
submods should be live subscribed.

The remote object would come over with the response.
It would need access to all the files too, for display in the UI.
Tool commits would be in the remote branch, so we need access to it.

The purest way is to have a pointer to the remote session, and read everything directly from that.
When changes come in, either from subscription or from our actions, 

How to trigger subscriptions to this remote ?
Register to a slice on the io, so that when changes happen, a special update action gets sent over to the subscriber.
If a new commit occurs in it, we need to be updated.
We need to have the UI subscribe to 


Poolstall is when we can have actions that change nothing in the filesystem, and send no actions out, and so we can rewrite the last commit with future actions, and the outcome will be the same.
Buffers things like parent commit updates if nothing materially changed ?
But then a child might have changed, so we should lift up ?
This could be stored as files, and then everything could hit a single branch to track head info ?