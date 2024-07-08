
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

If we just simply make a thread datastructure for internal threads, then use ln with submodules to handle remote repos and partial checkouts with proofs ?
In the meantime, we can manually copy the objects over to this special `network` directory, and then use an ln to point to these remote files, and we have a subsystem that keeps the directly connected to the remote.  

Or we make the ln point to the remote Triad, which we keep in sync periodically.

This can take advantage of blob dedupte under the hood, since as the host, so long as we repsect the privacy of the tenants, we are free to dedupe the data at whim.

So the symlink should point to a network object ?
Or, the thread object would be a remote pointer to a file held somewhere else ?
The symlink would include the 
Or make a dedicated object that represents remote triads.
It is better as a pointer to a single network submodule, so that it can be referenced an unlimited number of times but the update mechanism is still the same.
So the symlink points to a `network` path, and the those works to keep those paths synced remotely by subscription.
At the repo base, the base io.json might include subscription info ?
Or we might have a `.io` folder and store all the network info in there.

Making the remote repos should as submodules, so that they can be checked out fully.
We would provide a url that pointed to a place that we controlled so that we always have an available copy in our own domain.
Updates to the submodules would be considered a delayed commit, where it can be redone, so long as the system moved forwards, not backwards or sideways, to reduce the commit noise.