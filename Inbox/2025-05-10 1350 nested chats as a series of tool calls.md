
>[!tip] Created: [2025-05-10 Sat 13:50]

>[!question] Targets: 

>[!danger] Depends: 

A chat itself could be considered a set of tool calls back and forth where the AI is making a tool call to say "Get the user's next response."

So if you have a chat and the AI figures it needs to go talk to another agent, what you should see is two calls going out - your agent is sending a message to the remote agent, getting a response back, making another call, etc. 

We could adorn the view of the remote agent by also showing the tool calls and the context assembly that it is doing before it makes its response to you. This may involve arbitrarily deep tool calls and fan-outs and branches. 

All we would do on our side is know when these particular types of agentic calls were being made and just present them differently, present them as a chat. 

They would be stored as a tool call, but this simply can be treated as a chat itself, and we should be able to select this and allow it to be added as context. 

We would love to have a tool that can do context compression, where it looks at the context that you gave it and reduces it down to only the parts that are relevant. It may summarize or translate some of that context.

Additionally, a tool that whenever you put in a message, it would decide, "Hey, I need to gather some context," and it would order assembled context based on what's going on in the chat. You would be able to see this process and the end results, and modify it if you liked. Better yet, you could add rules and restrictions to train this particular agent to gather context however you mean. It would also be able to infer your corrections by the follow-up edits or the admonishments that you gave it each time it returned from its job.

In this case, is the chat simply a napp, and that modifies the disk data structure and then UI components that just render it a certain way? 