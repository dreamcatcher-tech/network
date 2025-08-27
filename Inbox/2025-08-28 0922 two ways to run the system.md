
>[!tip] Created: [2025-08-28 Thu 09:22]

>[!question] Targets: 

>[!danger] Depends: 

1. cli with streaming terminals
2. mcp with streaming message types

mcp doesn't allow shared live views easily, but that can probably be programmatically fixed
mcp means we have to do our own ui elements to arrange everything on screen

?we could track the tui with our own react elements ?
Means we don't get features as quickly, and takes effort - usability addition is kinda minor.

if we made it just pure terminal, then an agent is always a shell, and you might be able to drop out into the system shell, or at least get a shell underneath it.

multiuser sehll, where active users in write and read mode show up like on a google doc.

stateboard could present an ssh shell, or a file explorer, or both.

stateboard can just be all ssh for now ?
bots can see inside these sessions like objects ?

so without the browser ui layer, the terminal provides the perfect gui snippet.
It's also incrediby interpretable by the bot, since its pure text based.

so we have the terminal shell, hooked up straight to the agent, and then we have stateboard that shows files and other sessions.

we also have agent control protocol in an ide, so the question is, which takes least work, to get up and running now ?  seems the cli route is near instant, and can keep working today.

Ultimately we want text files output, and text based instructions.