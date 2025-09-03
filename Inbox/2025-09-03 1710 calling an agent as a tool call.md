
>[!tip] Created: [2025-09-03 Wed 17:10]

>[!question] Targets: 

>[!danger] Depends: 

async, where you call it and it will give you a face id and you can come back to it.
sync, where you call it and await the response.

the face id has to be the same for viewing the face as for the tool call.

webhooks !
we can get around the limitations of the current codex cli if we make the remote agent do a tool call back in when its done, which inserts itself into the codex stream.

how would face id be reported back during a sync tool call ?
those types of tools might not be faceable ?
what about hooking up a debugger to the agent during the tool call ?

tool call could use the session id and the call id / request id as a way to get the view or derive it ?

we could use the task management tool to handle status of long running tasks ?

the delayed version could be, tool returns with a task id, and then when it finishes, a message enters the chat, so long as the same chat is still active, and it says "btw task id is finished now".

the client then pulls the result using the task id.

they should be able to cancel it too.

we can give it a subscribe function, where it calls this and knows it will be notified (somehow) when the task is done.  When done, we just pipe text in on the terminal, or just tell the bot that the user will in fact tell you when the task is done.  

Let them cancel or unsubscribe too.