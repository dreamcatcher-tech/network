
>[!tip] Created: [2023-03-07 Tue 12:58]

>[!question] Targets: 

>[!danger] Depends: 

If PR is the way that all remote actions are transmitted, then we need some way to verify these actions.

Most thorough is to execute the remote fork using our known good reducers, and verify that the state is legitimate, then perform the merge, optionally checking the resulting state against some logic checks.

Less thorough is to have logic in the covenant that triggers when merging state.  This means that any state is allowed, and how it got there is somewhat irrelevant to the developer, so if the state passes the logic checks, then let it in.

Rebase equivalent would be load up all the actions from the PR and re-execute those.
The resulting state might be different if multiple PRs were received in parallel.
They might act on indepedendent children, in which case no conflict can have occured.

This might conflict with having [[2023-02-24 2128 view locked writing]] which might require the state be something already.

We can encode actions as operational transforms so they can always be merged, particularly for CRUD based operations.