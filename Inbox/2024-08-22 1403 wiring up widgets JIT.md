
>[!tip] Created: [2024-08-22 Thu 14:03]

>[!question] Targets: 

>[!danger] Depends: 

If there is a good description of what actions the widget is capable of doing, and what format they will come out in, then we should be able to conntect these to the input props of other widgets.

For example, if the git browser has
If the repo browser clicks on something, then the gitgraph would rerender with this repo.

These could be chained, so repo > gitgraph > file explorer & branch explorer

But branches is going to be a file explorer ?
Git graph duplicates this view, so could choose either.
Git graph could be set up to view a specific branches commits.
Graph seems to be for understanding the relationship between all branches.

With these props connections set up, interactivity can be granted.