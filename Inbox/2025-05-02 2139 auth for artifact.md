
>[!tip] Created: [2025-05-02 Fri 21:39]

>[!question] Targets: 

>[!danger] Depends: 

allow for the construction of custom roles that are fine grained ?
we cannot set read permissions in any way, but we can set write to be limited to certain branches, certain paths.

We might be able to set read, but that is sort of annoying.

write to the soul branch just means you can update permissions.

Could actually manage read if we denied clone ?  or it could be done only with a sparse checkout ?
just not sure where it would get used.

This data structure should be able to be analyzed by a simple piece of code that can walk it and merge it, giving you an authoritative answer as to what permissions out of all possible permissions a certain person has to a certain location. 

napp permissions need to be considered too ?
should this be per process as well ?

Billing admin is a great one if we could set the ability to pay for the repo's actions separately from any kind of control over it. That's quite good, allowing it to be handled by a group of people or a quorum. Also, make all actions capable of being paid for - if you want to do something with the repo, you gotta pay. 

Stucks and solutions need to be handled for a repo too, since whilst stucks are global, the repo pins itself to some specifically, as well as solutions, and it can issue them / sign them, so that ability is important, being able to change such a thing.

role defs should say what they copied from, and maybe point to a top level commit ?
or just write out the json, then allow editing on a per repo basis.

May be best to exclude groups, since that could get complicated ?

Need a table like this, but for our permissions:

| Permission                 | Read | Triage | Write | Maintain | Admin |
| -------------------------- | ---- | ------ | ----- | -------- | ----- |
| View and clone repo        | ✓    | ✓      | ✓     | ✓        | ✓     |
| Create/view issues & PRs   | ✓    | ✓      | ✓     | ✓        | ✓     |
| Comment on issues/PRs      | ✓    | ✓      | ✓     | ✓        | ✓     |
| Apply labels, milestones   |      | ✓      | ✓     | ✓        | ✓     |
| Close/reopen issues & PRs  |      | ✓      | ✓     | ✓        | ✓     |
| Push code                  |      |        | ✓     | ✓        | ✓     |
| Merge pull requests        |      |        | ✓     | ✓        | ✓     |
| Manage teams               |      |        |       |          | ✓     |
| Manage webhooks & keys     |      |        |       | ✓        | ✓     |
| Manage environment secrets |      |        |       | ✓        | ✓     |
| Change repo visibility     |      |        |       |          | ✓     |
| Delete repository          |      |        |       |          | ✓     |