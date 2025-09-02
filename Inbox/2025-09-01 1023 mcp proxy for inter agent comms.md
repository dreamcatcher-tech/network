
>[!tip] Created: [2025-09-01 Mon 10:23]

>[!question] Targets: 

>[!danger] Depends: 

They should talk to each other using mcp, and these comms should go thru the proxy, so they can be captured in artifact.

This seems the same as chain joining, but it says that ALL execution takes place inside an agent.

So even the artifact ops are really done using agents, where artifact is the consensus and logic that controls how the database gets updated.

When it needs a new worker, it calls on it.

So all artifact can really do, is start new agents using infrastructure, then push jobs to them and record their results and their inter process communications.

It never actually does any of this itself.

It provisions by calling an mcp services.

it interacts with the agents it spawns using mcp calls.