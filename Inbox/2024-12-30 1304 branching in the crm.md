
>[!tip] Created: [2024-12-30 Mon 13:04]

>[!question] Targets: 

>[!danger] Depends: 

If make changes that affect many records, like a route update that will change schedules for many people, then we want to do these in a branch.  Then we would indicate in the widgets that we are operating off the main branch, and then when they're ready, would they like to merge these changes in.

We would first merge the destination in with us, so we know we have the latest changes.

Might lock the tip if we need to, where we pause processing so we can get ours in.

The UI would signal that we are in this experimental mode, and might even be set espeically prominiment if we are in a temporary branch, vs a long lived branch, like a testing branch.

In long lived branch, a piece of config would say what the parent branch is, so that when we transient fork, we know we are transient and can act accordingly.