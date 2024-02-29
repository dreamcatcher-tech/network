
>[!tip] Created: [2024-02-29 Thu 15:08]

>[!question] Targets: 

>[!danger] Depends: 

When an isolate starts, its first action is run in serial mode.
it needs a way to tell the system that it wants to stop running, not reply to its owner, and allow further actions to come in, so it will resolve later.

If we reply with a special symbol, we can make the commit logic not copy the reply across.

If I later want to reply to this origin action, then that output will be sent back to the caller.

However, plain branching, with 

Or, allow a branch option that does not return when the origin returns.
Branch without close.
So when the origin action replies, that reply is copied over, but the parent does not close the branch.
`noClose` as the flag to set.