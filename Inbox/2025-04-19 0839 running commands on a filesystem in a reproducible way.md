
>[!tip] Created: [2025-04-19 Sat 08:39]

>[!question] Targets: 

>[!danger] Depends: 

Docker file represents such a concept.

In nappland, we could make it so that the fs commit and the commands are bundled together, and visible in a tool, so that someone can easily see what command line was run at each commit that produced the next layer.

Solves repro of problems like someone setting up an environment to show a bug, then listing out the commands they ran, making it hard to repro.

We should be able to make agents that can easily repro any scenarios just by reading the ticket, so they would proviision the blank fs, and be taking snapshots in git, or using docker backed by git, so that a reproducible situation was shown.

Docker is nice since it already has all the mechanics, so we should be able to translate that, where we treat the whole root filesystem as the git repo.

Then when bots are trying to solve problems, then can grind thru iterations and keep reverting back to the repro case, before they know they solved it exactly.

