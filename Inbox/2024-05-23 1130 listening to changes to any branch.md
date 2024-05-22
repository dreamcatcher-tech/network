
>[!tip] Created: [2024-05-23 Thu 11:30]

>[!question] Targets: 

>[!danger] Depends: 

in [[2024-05-22 2021 gitgraph visualizer|git visualizer]] we might have a component showing a huge number of branches.  When these change, we should know, but we don't want to watch every single one, so a hook is needed.

Could make a type of splice that advizes on children formed, with a pattern, and with a depth of nesting parameter.

Periodically branches should be commited in to the head, so that we always have a hash record, but we shouldn't make a commit just to do this.  We could have a branch running sideways that accumulates all the changes in realtime, and gets squash merged into main periodically.