
>[!tip] Created: [2024-07-21 Sun 22:17]

>[!question] Targets: 

>[!danger] Depends: 

Make it run again after the agent runs To determine if it needs to switch again ?
Some agents might do a switch themselves ?

Might be better as a completions run, since we need the tool call to be made, then we need to stop the run, rather than give the tool calls back.

If we don't give the results back, presumably the thread remains locked.

Can we start a new run when we have received tool calls as the model output but there is no point fulfilling them ?

Is there any benefit to having the switch choice in the thread so the model knows about it ?

Running the switchboard in parallel would mean we could generate responses faster, and then yank them back if the switchboard said it needed to switch ?

The other option is that instead of using assistants, we could manage threading ourselves, and we could insert the system instructions directly, then get results out.

Building up the state on the openai servers is problematic, particularly if the threads get long.

Benefit is access to vector stores and code interpreter tooling.
Future gains come out way as they upgrade this interface ?

but also, assistants cannot do multiple parallel calls with different temperature responses ?

Overall assistants offers less flex, more state, and is not as configurable.  
If we need a vector store, we would need to create our own threads and run that way ?
But ideally, we would run our own vector stores too ?
We can treat it like a completions call if we need to, so that code interpreter can run, but otherwise no point lumbering along with it.
Assistants does allow an external way to view the threads.
Does offer thread truncation, but the switchboard should do that.
assistants can be run in a stateless way by creating the thread at time of doing the run.

Hybrid would be the longthread is only for the switchboard, and the assistant choice includes the number of messages to pass back, as well as the number of topics to pass in too, so the longthreading is still handled on their side ?

So if we wanted to do fancy multiple calls, then we would need to use assistants or use completions.
So might be worth struggling on with assistants, enjoying some of the benefits of automated thread management, and then when we want to do fancy things, use the chat completions method.

