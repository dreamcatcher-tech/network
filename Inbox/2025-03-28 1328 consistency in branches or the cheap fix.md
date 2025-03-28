
>[!tip] Created: [2025-03-28 Fri 13:28]

>[!question] Targets: 

>[!danger] Depends: 

If we do it "properly" by using a branch, we might end up with properties we don't know about becoming a problem.

But it might work out well.

We could always back off and use the cheap version.

The cheap version has known faults, so why build it ?

Why would we build the full version vs cheap ?

Full version does not cope well with multiple branches being updated concurrently, as there is no pooling function.  May require a write lock for doing combined update, rather than racing ?

Racing where all are trying to help each other is best outcome, without having triggers on the objects.

at least we will then have a complete repo that can be downloaded and transported.
repo permissions can be here too, as this is essentially the .git folder.

The purpose of this branch is to:
1. store the proc filesystem
2. permissions, as in who can access this repo in any capacity

owners of a repo could have different quorum rules.