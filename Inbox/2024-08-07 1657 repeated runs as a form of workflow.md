
>[!tip] Created: [2024-08-07 Wed 16:57]

>[!question] Targets: 

>[!danger] Depends: 

If a workflow is defined in mermaid, and then a bot knows how to execute it, then each run can be treated as a unique file in the runs folder.

We can jump in at any point, and make changes, which can then trigger later points to execute.

So in this way, complex processes can be described at a high level, with drill down into agents and widgets that specialize at that particular place.

So the bot creation loop would be a workflow, and you should be able to see how many iterations have occured before the output is improved.  Git history can be used to overwrite the current run if we are doing iterative improvement, rather than repeated execution for a repetitive process.

nesting of workflows is the same as nesting of agents, so a compound workflow depends on many agents arbitrarily deeply nested.