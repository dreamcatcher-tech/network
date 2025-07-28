
>[!tip] Created: [2025-07-29 Tue 09:14]

>[!question] Targets: 

>[!danger] Depends: 

if the buttons down the side just change what agent is showing ?
Special case is when you need to switch the active chat ?
Or switch to other agents, like how another contact would be selected.

chat selector should be part of the stateboard ?
agent selector should be part of stateboard, like how you can select contacts ?

switching the active bot also brings in the bots stateboard ?
we are changing the notion of a conversation with a bot directly, but rather we let that switch around, depending on what you're doing.

plan is to make artifact mcp, since that is required anyway.
then see if we can get a basic gui up that is mcp native.

pick the bot avatar, and you can get a stateboard that will let you alter the assistant settings just for the subsequent runs in this chat.  can reset it back to defaults.

hold ctrl to start a new chat with the selected agent where you are talking about the chat you're just in.

treat chats with each bot as sections that compress leaving only their conclusions, like when selecting files ?

so the assistant handoff happens manually when you switch out the bot ?

can switch to the file bot, with the file stateboard, then pick what you want, this updates the transclude carrier / clipboard, which itself is a stateboard item, and then you can close the interaction with the file agent, since you might not need to use the file picker any further.

If no prompting was used, then this agent can be removed from the list.

comes down to what level - there is a bot in the background that is aware of all the api calls the human is making.  these api calls should be stored in a thread, so the system agent can be made aware of it, so it knows what you did.  It could answer questions from other bots.

how does a bot talk to another bot as part of its tool calling ?  talking to the UI bot, it can ask questions about what the person just did last, and what they're trying to do.  UI bot can do anything the user can, even a right click or a highlight.