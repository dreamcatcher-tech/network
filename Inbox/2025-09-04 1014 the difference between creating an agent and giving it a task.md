
>[!tip] Created: [2025-09-04 Thu 10:14]

>[!question] Targets: 

>[!danger] Depends: 

creating the agent, either from blank, or from a library, is separate to giving it a task.

once the agent is known, then we would be able to refresh our memory as to what it did, how it was coded, which would be part of the current agent mcp set.

interrogating an agent should be part of a separate mcp server, where you can look inside the agent and read what it does, and its current status.

this should be the same toolset as the task management.

1. create_task
2. cancel_task
3. await_task
4. interupt_task
5. update_task

So maybe task management should be the same all round, with the await pattern ?
the patterns should reinforce the llm ?
create_agent gives back an id.
await_agent( agent_id ) waits for it to reach a certain state.