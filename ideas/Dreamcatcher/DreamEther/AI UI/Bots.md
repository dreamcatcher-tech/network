How to make the switcher ?

load up the full conversation so far and ask gpt ?

Ask gpt to choose a bot, based on the full conversation so far, except for the bot parts, since that costs a lot of tokens ?

Give the last N chat segments and pass the summary of all the bots in, asking for a solution.
UI should show thinking icon as the switcher makes its request.
Then when returned, display the selected bot on screen somewhere, nested
Show this bot thinking, along with other parallel calls.
Once this bot comes back, do one more 

If it needs to be broken into sections, then send each piece off to be answered independently, with a heading generated for each, then stream each response back into the text live, so multiple responses are streaming in.  The placeholders are replaced by UI elements that house the streaming until done.

Then produce a summary of the above to cap it off, streaming that in.

So the requirement is a UI element, or data structure that handles multiple areas being streamed.

Could we do this all using schemas that the AI adheres to ?
Can schemas be processed in streamed form ?

First you would get the bot to make a schema definition, and loop it until the schema compiled.
Then you would test responses using this schema, looping until the schema was met.