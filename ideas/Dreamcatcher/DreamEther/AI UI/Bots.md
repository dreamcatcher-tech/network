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

Break the query up into different intents, each summarized, ready to be sent to the bot.

Carry over of the list of concepts that have been explained is the same as making a list of tasks that need to be followed - basically just a list stack, or some similar structure.  Has a criteria for the format of the items in the list, and can do stack operations on each one.
Have a standard list computer, to display to the user, let them reference and select, and modify the list.
This base element gets inherited with different AI functions for putting items into the list, and doing operations on the list.  The instructions can be very widely varying, but 3.5 takes care of turning them into atomic list modification actions.  The list then, should be a blockchain ?

? what would the todolist be, written as a bot ?
? What would it be, written inside the dreamcatcher, without any external input ?

Every instruction should allow a refinement loop, for when the machine doesn't get it right.

Should be able to edit the yml files that program the machine, using the ai, and then it compute the consequences of the changes and ensure all the other rules about the system still hold true.  So a simple change from you might trigger a lot of error looping as it fixes its mistakes and updates other parts of the system.
