
>[!tip] Created: [2024-12-28 Sat 19:19]

>[!question] Targets: 

>[!danger] Depends: 

Seems like this should involve some reasoning steps, somehow, so that the AI can answer questions about all this.

When a remote write occurs, it would automatically cause a commit, we assume ?

Or, could many writes occur, and then commit ?

Or, when the process action completes, commit is automatically triggered ?

Because it requires IPC, it would bundle everything up into actions that would get sent remotely, and then the system controlling that branch would execute the commit.

Empty commits should reject.

What about a commit being called on a process ?  We can't really force a branch with a process manager installed to do a commit ?  Would be a noop, since the action itself would be a commit ?

Permissions should be about whether remote actions of any kind are allowed.

Is clone to do with snapshots, or is that some other kind of system level thing ?

How should managing the git config be done ? like changing the remote ?

How can we do a push between two repos that we control ?

Is forking a process the same as forking a branch ?  isn't cp for a process the same as fork ?

Fork can only apply inside  a given repo.

Clone should provide a set of globs for what branches to use.