
>[!tip] Created: [2025-09-18 Thu 10:57]

>[!question] Targets: 

>[!danger] Depends: 

having multiple cocos share the same agent name, makes this hard, since the serving of the requests can become tangled.

if we are having too much traffic for load, then we should make a new agent for each session ?
that might be excessive, but otherwise we need to do some kind of session affinity ?

if the workloads were generic / stateless, then we could reuse containers ?

two use cases:
1. provide a web page
2. provide a welcome agent to chat with as a landing page

We know we need one codex session per user.
By scaling ram we can host multiple codex sessions on a single agent, but is this what we want ?
definitely lighter to spin up a new face, but the issue is when they get resource constrained ?
can send a replay request under this situation ?

better, we would receive the request, and then redirect to an agent that could handle it.
its 100MB for a codex session, so it seems the cost is not much compared to wasted ram costs from underutilized machines.

Also the programming time is high.

So basically, one coco per incoming user session.  We just shut down if the browser is idle.  Can put some shutdown UI in front of it, and give it time to wake up.

we might not need to restrict things to a single agent at a single agent url path.
if multiple agents share the same mutation folder, then can be presented at the same agent path.
This means they can
We also have one browser session per agent, so affinity seems easy to do.

the dns name more just represents the filesystem access and mutation zones.
so an 'agent' is represented by its workspace.  Multiple agents accessing the same workspace and running the everything else could be considered the same agent.
Fly can load balance between these two - the session affinity is going to be set in the browser, so that an agent that is aware it is parallel will redirect to an exact instance id based on a cookie or something.

Or we could redirect to a dedicated agent ?
or have just one agent, and have only one face per agent, and just stick to that.
If you want a new face or a dynamic one, then that is going to spawn a new agent with a new name.
Each agent has a strong identity, and you might want to share exactly that one with someone else, so it needs a unique name.

therefore the name of each agent must be unique, and they would never present to the browser the same name but for different entities.