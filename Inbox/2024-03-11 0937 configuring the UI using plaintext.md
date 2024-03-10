
>[!tip] Created: [2024-03-11 Mon 09:37]

>[!question] Targets: 

>[!danger] Depends: 

If we change to a diagnostic view of the chat, then we would see the sysprompt.
We should be able to change what is displayed by altering a text file.
This text file could be changed by a piece of code, manually, or by AI.
The file should have a commit trigger that checks the format against a schema.
In this way, we can have 3 interfaces:
1. code
2. text editing by the user
3. ai powered

The act of commiting causes the execution of whatever is configured there.

?client side modifications
We might not want to go out to the server for these changes to occur, but for now we run everything on the server until the programming model is stable, then we can make ability to run local.