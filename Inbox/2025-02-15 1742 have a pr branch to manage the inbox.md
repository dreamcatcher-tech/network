
>[!tip] Created: [2025-02-15 Sat 17:42]

>[!question] Targets: 

>[!danger] Depends: 

Each repo should have a PR branch that is set up to handle requests to merge into main.

This is a machine managed branch - ie: it has fibers running on it.   When actions come in to this branch, it will assign an slot in the inbox for merge requests.

It might be able to merge in the same action.

For now, we will do its job using external processes, so a request will come in, and we will process it conventionally by the server, and use our privileged locking position to ensure the request goes in somewhere.  The queue is numbered, and points to a branch and a commit that would like to merge.


Any future request can tickle this process if it crashes or stalls, so it will automatically resume.

Separate branch means that we don't clog the main branch with all the noise of commits, and it stays quite clean, except it has these PRs come in to it periodically.

Also all the computation and triggers happen in the PR branch, as it works to execute all the logic that the commit entails.