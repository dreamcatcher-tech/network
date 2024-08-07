
>[!tip] Created: [2024-08-08 Thu 10:57]

>[!question] Targets: 

>[!danger] Depends: 

If user asks why an agent was selected, then this is considered a call to switchboard, and if its CoT is in thread, then it can actually comment on its reasoning.

"Why did you give me this agent ?"

Also means we can easily show the user in the UI how the reasoning was reached.
So switchboard runs, and the tool call goes in, then we put in a noop return value and call the next agent.

If that doesn't work then we can split them out and just store it separately in the Thread object ?

Or, filter switchboard operations out of the thread when we pass it to other agents.

Backchat would have its summoner calls go in to its own thread ?
Runs with the focused threads messages, but the choice and reasoning go into the backchat thread, so it can be talked about with backchat, like "why didn't you operate ?"

This would cause the backchat switchboard to call the backchat summoner to explain itself.
The summoner might not be able to reply or be spoken to directly ?
Unless we called it without forcing a tool call out of it, and rather disallowed all tool calls.
So it can actually be asked to explain itself, without the ability to call a tool.