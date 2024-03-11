
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