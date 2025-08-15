
>[!tip] Created: [2025-08-14 Thu 16:13]

>[!question] Targets: 

>[!danger] Depends: 

it is probably trained on tools like git, and so giving it something foreign is more confusing than giving it exactly git.

We are now actually, with stateful serverside, acting exactly as git, but we virtualize the index / staging area.

dangerously, if we are close to git, but slightly different, the model will often stutter.

So the write tools should be filesystem writing.
the navigation should be git branch navigations.
the execution should be clear and simple

tree is a bit special, as its one level higher, like management commands.

browsing tools, load tools, unload tools - these are the simple deep research style tools.

we could make a bot that crawls tools and loads them just to test their suitability before returning a result that it has checked, guaranteeing the tool choice.

fs tools should be very narrow and tight, and need to be loaded explicitly.

List tools would give the full list of allowed tools, if specified.  These would be like roots.  If any tool is allowed, then we say so, and require the list of search.  Error and tell it to use the search function.

file writing, if there is a schema file, the tool for writing json changes to have the schema required.
so to do a write, you cannot just specify a path, you have to change into that directory, which would cause the tools to reload / change.