
>[!tip] Created: [2024-05-28 Tue 11:48]

>[!question] Targets: 

>[!danger] Depends: 

Currently the session file accumulates, but we should be making it be per commit.
To recover it, we would walk the commit history. 

Means that when a message is selected, then we can fork instantly from the commit that caused it, rather than doing some kind of look up.

The session is not actually a thread, it is a file that was assembled by a thead - this needs to change.

But the file retrieval is a bit more painful, and delayed, and takes more db hits each time.

Diffs only or splices only with a pointer to the last changed commit can help us look it up quicker.
Store the last known commit - the one we currently have checked out - this links us to the previous version rapidly.
We would also store summaries periodically, and point to the prior summaries.  This allows truncation when messages get too long.