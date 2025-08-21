
>[!tip] Created: [2025-08-22 Fri 10:36]

>[!question] Targets: 

>[!danger] Depends: 

For the UI, we need to show the dynamic tool list that the server side is seeing.

this can be either fixed json objects, or it can be presented as resources that the UI can see ?

in the UI, we would be loading the chat context and conversation history.




the chat mcp should be able to resume conversations.

maybe the chat could maintain a list of bots to use for a certain job, presenting these as resources ?

before running, we would always call mcp.listTools to make sure we had the latest one.

given that the mcp server is stateful, we would always  need to recover the state we were in ?
this should be simple if it is simply which tools are loaded and what commit we're pointing at ?

perhaps the task of making a system prompt with as few conepts as possible is good for bots to grind over.


intent passing is the key - this is what topograhy is about.