
>[!tip] Created: [2025-09-03 Wed 15:42]

>[!question] Targets: 

>[!danger] Depends: 

they have agent interactions coming, so we can jack on top of that, but we need a tool call compatible thing for ourselves to handle it.

our client could kick the assistant with tool call results, where we fake the assistant making a get_result type of call to the task, and the completed results come in, and then processing continues.

We need a pattern to handle the management of long running tool calls.

we also need to be able to make tool calls that await the results, too.

? what about an agent that did some work on the local mutable state ?
that would just be an agent running in a new thread ?