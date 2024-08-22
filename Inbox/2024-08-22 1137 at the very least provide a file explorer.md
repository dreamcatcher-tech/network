
>[!tip] Created: [2024-08-22 Thu 11:37]

>[!question] Targets: 

>[!danger] Depends: 

Then provide a git commit viewer as well
plus a branch navigator that can look like a file explorer.

With this visibility showing in the stateboard, we should be able to understand more about how the system works.  These tools are the very minimum everyone needs to navigate around the system.

dnd on the file system, show the filesystem as modified, with a reset button.

What if the user browses to a remote repo, or changes branches and things ? how can we signal that now everything they focus on treats this as the CWD ?
Add an assistant update to the thread that indicates when they change their CWD, possibly allow this to be browsed ?

This should be an option to show on the prompt.

Modifying a previous commit would create a new branch.

Then should be able to browse their own repos, list all their repos.

What about a selection in the current branch, like when you select the stateboard historically ? This should show up as prompt info ?
When you submit it, then we add some extra info as an assistant message, that says how the stateboard has changed, and what the users selection inside the stateboard has changed to.

The explorer component could be set to only show the changed files in a commit.

So sounds like some kind of wiring diagram where the bots have connections and transforms wired up between different components.