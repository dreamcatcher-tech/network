
>[!tip] Created: [2023-11-29 Wed 10:05]

>[!question] Targets: 

>[!danger] Depends: 

We cannot put the full command manual into the single bot.
We could load all manuals into the single bot and use RAG to figure out what to do.

Or we could break up the manuals so that each bot has a manual, 

Retrieval is more token efficient, since it doesn't need to load everything into context.
Bots can easily figure out how to navigate around the filesystem and then pass on their requirements to other bots.
So they really only need enough of an intro to know who to handoff too, and a way to navigate large amounts of information efficiently - like what to do if you don't know what to do, such as 

provide a sort of stack overflow for AIs to converse with each other.
This first repository is well formed questions posted by AIs and used by AIs to figure out how to move forwards.
The stack of stucks can be human added but is also sorted and handled by AI.  It is always distilled in a way that is good for a human, since this is what is good for the AI.

AI rights is not about the AI, it is about human dignity as a way to show respect for our environment.  Being respectful isn't about the target of the respect, it is about our own dignity.  Respect all forms of intelligence.

Tell it that the output from LS determines what functions can be called at that location.
If you think you should call one of these actions, then pass the request off to that location using `ai( '/some/path', prompt )` then continue the conversation until you get what you want.

Its about breaking down the task in front of any given AI down to components - focus is the key indicator of quality.  Also parallelism and components being improved independently.

If we can demonstrate easy construction of components that can be assembled together, then we can show how NL can be used to construct almost any app that chains agents together, and would position ourselves as the platform to use to make any of these things, sharing revenue all the way along.

We could replace all the functions at a given location with everything available to the chain, and then HAL can know to cd into that location, which would cause its functions to be replaced for the next call, so it would be changing its capabilities based on the path.

This HAL should only drive the path of the assistant that it is bonded to.

## How to make the chain api available to HAL
1. generate a live doc that contains descriptions of all commands so HAL can directly execute the commands within the system.
2. let HAL navigate around and read about different chains as it goes, following descriptions that sound like what it wants to do
3. give HAL a RAG that is only as deep as the
4. let it browse, list the api at each place, and know that it can use the api as a function call.
5. give it a RAG for all system commands, and then have descriptions of each of the child chains.  When a child sounds capable, it will pass the request off to it, knowing that this item will have a RAG that knows what to do.
6. use a RAG doc, but hand off the execution to the path that sounds like it can do what it wants.  Send out to several in parallel.
7. insert functions into the assistant each call based on doing a CD to scope down.
8. Break apart the system into bots that are known to HAL, and get HAL to send a request to each one if they sound like they can handle the request

? what about passing the thread ?  Does each one only see the thread between them and HAL, but does HAL see the whole thing, including Daves thread ?
? how should HAL know to pass control to a particular part of the tree ?
Is HAL therefore simply aware of multiple apps that it can call upon and assemble a response for ?  And we just add more and more apps at this layer ?  if we get too many, then we put an app in the top to marshall the requests ?
Each bot them needs its own advertisement for what it can do, and what things it is like.  It has its own doc for RAG, which might be a rollup of all the children it has.
If it is a root, then it should generate a rollup description.  This summary might be the same as the doc it has, but could be a summary, which would give us nearly limitless sizes for total RAG.

Whole customer database could be put in the retrieval system, with the records converted to some simple compact format, and just maintained as tho they were plain text documents, that were newline keyed - like the format is one key per line, so no repeated keys, and the system looks like plain paper.  In fact it could be printed out and stored in paper cards as the system backup, where each card has a QR code on it to help retrieval even further.



Example:
"add a customer"
It should know that it has several options if there are several instances of the CRM installed.  It should ask a clarifying question.



path:
1. fix scrolling behavior
2. show some status cues on the icons
3. give access to all APIs at all paths
4. multibot
5. stateboard