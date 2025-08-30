
>[!tip] Created: [2025-08-30 Sat 14:13]

>[!question] Targets: 

>[!danger] Depends: 

since we use artifact to rebuild any container state, we do not need volumes for the agents, and can continue to treat them as ephemeral.

the if the container dies, then the state that is uncommitted would be lost.

artifact is the persistence, agent is the worktree.