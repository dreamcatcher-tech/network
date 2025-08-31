
>[!tip] Created: [2025-09-01 Mon 09:36]

>[!question] Targets: 

>[!danger] Depends: 

each app is supposed to have its own home repo, and in there is where all the executions are happening.  The git repos are just hash based connections and don't strictly matter.

In the top level app, this has the special power that it can create new apps.

Artifact is separate to all, as it is just a permissioned data store, but it can also trigger agents to execute - it is the agent orchestrator.

Agents can be persisted into artifact when they are halted.