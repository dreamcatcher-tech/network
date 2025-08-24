
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

We could rebadge the codex cli, and make the prompts dynamic and configurable (probably using mcp tooling) so that the codex flow, of endless looping and filesystem interactions, can be leveraged using our own tooling.

By sitting atop their work, we can inherit all the benefits of their efforts, even tho they may not document or include all of their tuning steps.  We know we have the frontier long horizon agent here, and it is fast and efficient.

codex seems to give us the driving loop, so that whole thing isn't something we have to deal with.
the driving loop is hard, so is the streaming of progress, the sandboxing of commands.
These things would run one per container type of thing, and they would run an retry until they died, which means that all that retry logic, connection logic, auth logic - that's all handled for us, and kept up to speed.  The whole streaming ui is removed from our domain too.

File access can be done with a vscode or other form of online editor, or a direct connection to the container fs.

start with using the real filesystem, and check out each dir, then detect diffs ?
so the real filesystem becomes the staging area.
if we just intercept the read, then things can be virtual.

then the chat goes into the filesystem for ui display ?  while running it shows a streaming version, and commits at the end of the task.

agents flavoured differently can spawn off parallel agents, with different settings, since they're set for a particular task.  Lightweight testing, investigating, theorizing, multi agent.
agents can have different filesystem / repo access to draw on.d

allow each user to auth loop with chatgpt.

so we basically become a task management system, with some interface goodness, like mic recordings, where we use the codex engine as the way any agent does its jobs.

The codex runner becomes the atomic unit of AI execution for us.
The fact that we need this building block is the key - we had previously been making these things appear by using haphazard ways of interacting with the model, but the codex thing lifts it up one level higher.

But what are we trying to do with this ?

control the graph of executing agents using fibers on the root repo.  Shows the parent child relationship, and the cross agent interactions.

? could it be made to work with our mcp server to be able to navigate around the repos, read things and write things, and ultimately commit them ?

Is the prompting really going to be getting this agent set up to use these base tools, and then probably getting other agents set up to use their own unique tools.