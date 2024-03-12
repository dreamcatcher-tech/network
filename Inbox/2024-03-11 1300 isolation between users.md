
>[!tip] Created: [2024-03-11 Mon 13:00]

>[!question] Targets: 

>[!danger] Depends: 

Repo names cannot stay as being global - they have to be reduced down to be per user.

Then, they need to be shared between users.

So adopting githubs user model might be the best way ?

If you clone a repo, it has the same name but inside your own account space.

You can interact with other repos you have permission to do so on, but always under your account name.

Public repos might need to always remain public if someone else is attached to them ?

Another way is to have one level higher, which is accounts, and so everything is of the form `artifactAccount/githubAccount/reponame`

Means that the repos are independent, in that if an artifact account deletes a repo shared with other users on artifact, then there is no impact on those other users.

Or we could track references, so that only the last person to delete it truly removes it from the system.

We want the user account in artifact to be a repo too, then all these other repos are just submodules.

Where should permissions be held for the repo ? in the repo itself, linked to github, or in deno independently of anything else ?

Seems best as a user followed by repo names, since deploy needs to mimick the filesystem on the users computer, whereas github only represents a global registry of repo ownership

Or, use a branch to indicate a user, and keep the repos as github namespaced.
Store the head of the repo that each

Concept of a merged head, where it is the hash of all the branches of the repo, so we can take a point in time snapshot.  This can allow instant walking of all valid branches ?  Could be stored as a branch itself, with a gittree as the container mechanism.

Permissions need to be checked whenever the user wants to do something.  Maybe after each action, to avoid delays.  Unless they always had their own copy, and interaction required checking in with github before proceeding.

> Using this permissions model, how can we allow people to share sessions / branches with each other, and interact with them seamlessly, sharing realtime streaming updates ?

Use webhooks from github to give instant permissions updates.
Allow manipulation of github permissions internally, that get pushed up to github.
For now, store full copies of repos under each users account.

Set up webhooks to pull from github when git repo changes.
Sharing between users - if they have permissions then they can see and interact with each others branches.  The creator of a branch is the only one that can write to it.

Shared repos that are genuinely two repos interacting with each other ?

Private branches on shared repos ?  We could allow some branches to be designated private by the operators, like a shadow, and they would not be shown, ever - this is basically a private fork.  This is what should be used if you want this privacy.  We can probably charge more for that.  