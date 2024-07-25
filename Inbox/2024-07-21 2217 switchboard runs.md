
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