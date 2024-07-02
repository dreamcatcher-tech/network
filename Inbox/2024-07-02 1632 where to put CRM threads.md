
>[!tip] Created: [2024-07-02 Tue 16:32]

>[!question] Targets: 

>[!danger] Depends: 

These have to be part of the CRM, else they can't merge their changed files in.
Threads would only be allowed to branch off from the base branch, and the thread files have to be in the 'threads' folder, and they can only be started with certain images.

Or we can force them to only start with a single agent, and inside that agent we can invoke new bots in the session ?

Or, the users backchat creates new bots when required ?
Sessions could be organized by actor that created them ? or at least that info is stored in the files.

Can a remote bot have access to the users backchat, but scoped only to things it has control over ?

ln in the actor repo pointing to the full path of the remote session.
The path can include the repoid.
It might not be a link, and could in fact be a json file with a format indicating a repo session, where the commit hash is periodically updated.

CRM threads would start with the files being part of the whole repo.  Then handing off to specialists as required.

Customer bot threads should start in the customers folder, and would be scoped to that folder.  Would have some search functions which may have a LUT cache warmed up, and would be specialized in dealing with customer records according to a template.  May be scoped to individual customers, or one record at a time.
Knows about saving back to base branch.

Actor threads would start at the root, and then would know how to hand off to other bots, like customers.
They would have a pointer to where they handed off, as a tool call, and then the actors backchat would cause them to follow to the new session.

The bot images would be pulled in from the base branch, and would be stored in full, since their objects are already part of the git repo so no loss there.