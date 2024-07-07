
>[!tip] Created: [2024-07-06 Sat 10:57]

>[!question] Targets: 

>[!danger] Depends: 

Isolates: pieces of conventional code packaged in such a way as to be callable by AI models.  These code calls can include API calls to external services and other side effect inducing things.

Helps: pieces of text that contain instructions for an agent to expand and fine tune their abilities to get jobs done, instead of packing everything into the system prompt.  The instructions might involve calling on other agents

Agents: system prompts and commands for calling isolates.  When they are invoked using an AI model, the invocation becomes a Thread.

Agent: has capacity to be made of any combination of a system prompt, isolates, and helps.

Threads: A running agent, containing stateful conversation and the filesystem in a possibly mutated state.  The index of threads is available to Backchat.

Backchat: A special thread aware thread.

Actor: A branch representing an identity on the system.  This is commonly a human, but can also be a machine.  It represents a permission domain.  It contains one or more machines.

HAL: 




