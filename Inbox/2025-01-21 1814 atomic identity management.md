
>[!tip] Created: [2025-01-21 Tue 18:14]

>[!question] Targets: 

>[!danger] Depends: 

If a git repo is used for the users account on our system, then we would periodically store their usage and billing info, periodically to avoid doing too many commits.

When starting to create a new repo, the first key that gets written is in:
`repos/publickey/state = pending`

This means that we can atomically switch over to the user home repo.

But to start with, we just list the repos in the db with a pointer to the environment object.

we need to answer:
- which DID does this repository belong to ?
- which repositories does this DID have access to ?

The repo state can be used as part of the atomic check to ensure it isn't undergoing some management changes.