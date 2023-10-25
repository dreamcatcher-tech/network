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
The list should be nestable, so each node can have children.

? what would the todolist be, written as a bot ?
? What would it be, written inside the dreamcatcher, without any external input ?

Every instruction should allow a refinement loop, for when the machine doesn't get it right.

Should be able to edit the yml files that program the machine, using the ai, and then it compute the consequences of the changes and ensure all the other rules about the system still hold true.  So a simple change from you might trigger a lot of error looping as it fixes its mistakes and updates other parts of the system.

Turn the system into a state machine, where the state determines what instructions and background knowledge gets injected.
If the base component was a state, and it could be nested infinitely, in a statechart, this might better model the systems we want ?  We would help the user make little state charts to achieve little repetitive tasks, or even single use tasks.

Bot boot should be a  blockchain app, and it should do some filesystem sync processes first, to ensure it has pulled in all the changes on the filesystem first.  React components show what it is doing by showing which parts of the tree are active.

Comparator component, where outputs of different processes are compared under some constraints.

Different workflows can be put in the store to solve the same problems.  Because good models drive usage, revenue is shared with model builders.  However, any user can tweak any model, so the models are actually AI managed, where anyone can improve them just be saying whats wrong in the simplest case, or fixing whats wrong in the most complex case.

SUT component, which allows any system to be modelled and played with under test.  The AI itself can be modelled as a SUT and so it can simulate itself ?  User gets guided thru some scenarios that verify the system, and some paths they want to walk it down.

The react components in history should always render whichever components in the tree are "rendering" or that are currently being manipulated by GPT.  They may be deeply nested, and can also include the feedback bot at the end that runs in the background, regardless of the response to the user.

The user chain inputs prompts to the system at the top level, and the system decides where to put them.  ? Can the user inject to a specific thing ?  Show breadcrumbs showing where they are in the model if they have navigated somewhere currently.  Or not, since they can technically talk to multiple parts of the model in a single prompt.

So each covenant is AI boosted, in that it can do some things with AI to change its state or give some interpreted views ?  Covenants are like system prompts to chains, where the covenants themselves are chains.

Embeddings retrieval component that can be connected to others, so embeddings can be used.  This is like a collection object, each child holds the binary of the embedded data.

`CD` is a way to get to a different set of functions.  The model determines if it needs to do this to scope down where it will go next to execute some parts of the model.

If all the bot actions with the system were blockchain actions, then they become easier for us to build and test, plus the functions have the testability that we need to do a standardized correction loop with the AI.  AI layer can modify the actions available to encapsulate more logic, and more customization.  Presents as self improvement, assisted by humans in the background.

Our interface just so happens to be exactly the same as the functions calling of GPT4.   Like its basically a drop in replacement.

Makes AI reliable by baking it down into blockchain executable and testable systems.  Vast thorough testing is possible since it is AI orchestrated.

So there would be gpt calls from inside a chain, and gpt calls outside the chain ?  Or are those actually gpt calls from inside the user chain ?
Using chains allows a huge amount of structure to be reused, and the navigation and history to be easily presented.  It also allows for us to simulate the AI by making the chains not do side effects.  The UI is easily rendered using chain logic to show what changed, what chains are in partial states, and to let the user drill down to see structure deeper using the navigator to show it in the stateboard.
Interrogation of exactly what was said to the AI is easy, since each chain can be interrogated and browsed thru.  This part should be parsed by AI too, to make it easier.  AI can select different visual elements to present to the user with the current CD item, which is actually a 3D CD where it can go in the past too.