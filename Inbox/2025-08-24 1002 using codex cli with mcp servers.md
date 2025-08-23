
>[!tip] Created: [2025-08-24 Sun 10:02]

>[!question] Targets: 

>[!danger] Depends: 

this could run server side as a mcapp, and use artifact for filesystem and branch access.

so we could have concurrent agents running this model.

maybe their mcp tools could be used to provide additional functionality.

we could run it on a real filesystem, which makes for zero setup overhead, and then use actual git diffs ?

filesystem watchers can show the changes live to a web browser.

codex itself can run as an mcp server.
so we could be able to drive long running codex task, treating codex like a hard working agent.
could run several parallel runs of the system.
Could get its runs to discover the decision points in the task.

codex does notification on job end, so we could treat this like a long running tool call.

so basically a top level project manager would look at all the jobs it has to do, and could run some experiments using an unlimited number of codex agents.

so the orchestration of codex agents in the cloud, and let you fire up a vscode workspace that is the same as what the agent sees, that can have extensions and other helpful things.

The agents run and they periodically check in with each other, or, they are required to declare their intents first.

so we would provide a prestaging area, where with all you available context we work to make a well defined job for the codex agent team to run.  it would use its own reasoning, and construct some entities so that the items being spoken about are clearly defined.  It would have some quick questions for you, and would work on deeper ones.  It would start up agents in some quick modes and see what questions they ask, or what scopes they centre upon.

As the run progresses, questions are added, removed, or reranked.
Decision points are confirmed, and all options at decision point are taken, some of which will conclude and remove themselves.

removing of options should always warrant deeper reflection to update the knowledge base to avoid making that mistake again.
All mistakes can be represented as tokens that concluded with knowing it was better not to burn those.
the current long agent runs are too open ended - they don't loop or tuck back in on themselves and reflect endlessly, almost like they're trying to save tokens.