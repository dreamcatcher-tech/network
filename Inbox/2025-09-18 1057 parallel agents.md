
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