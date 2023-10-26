## Let people save a list of macros to click on
If there is a query they run often, let them save it, and tweak it so that it always gets run with the 
latest data, or something like that.

"split that out into a separate packet for later"
Lets you split apart or combine ideas.  Can used in chat mode while driving.

Response: "that sounds similar to some packets that already exist - can I ask some more questions to see how different what you want is ?"

## Schema Form that is prepopulated
When needing information from user, can make a form on the fly that it asks them to work on, and show the info it knows already along with its attempt to fill them.  The user can correct these if they need to.

## Notifications and cron jobs
Summarization tools that allow a single line to be entered in a file to say something that the LLM needs to get back to the user about, such as a data format looks like it's changed, and then a separate table that keeps a track of all the instances it notices while it's parsing the database, and a way to allow it to randomly sample that list if it's too large to fit in singular context to give the user a summary of what's happened. So it would sample the first few, make some kind of an adjustment, and from there on it would randomly sample so that it could cover the whole amount, but it would not have to use a 32k context, it could stick to a smaller one.

This is how to draw attention to the user discreetly, and to let it insert notifications in responses to things, subtly.  Also some icon showing the inbox having some items in it. 

The user might ask to be notified when someone comes online, so this would get written in the file, and some kind of task associated to it, which might be a poll or a trigger.

## Ingesting data
Want to back check it - so if we ask for a base schema to be made, we would then back check it against all the data again to make sure it all fits, using a mechanical actual query, rather than a gpt parsed result.

GPT would be told to walk thru the database and to raise a flag if anything looked suspicious, caused gpt4 to come have a look.

It should be able to draw a graph of its progress using mermaid or something simple, and show the basic machine component it is trying to represent as a cursor, or multiple cursors.

Modifying the schema, to add child chains and other things, would be trivial, and it would store your chat (summarized) as documentation knowledge for whey the structure was changed.
## Common Schema detection
Shortcut using duplicate detection - send them in each record, and find which ones would match a common schema between themselves, so the list is reduced.  Then find those that can never match, or are wildly different.

## Error correction looping
This should be a generalized pattern that can be applied to everything from json parsing to .  The abstraction is a system that we want to input some change to in test mode, then get some error feedback, and then we keep going.  Advanced strategies can be created that try different things to correct the error, or use web browsing, or reset the test system and go back to the begining after detecting a dead end.  Or, parking where it got to and trying something else.  And flagging the issue for a human to look at since the machine got stuck.  The abstraction is:
1. the users prompt request in
2. The AI resets the system ready to receive a result
3. The AI submits a result, and receives some output that is either success or error of some kind
4. the AI can try again with the system in the same state, or it can reset the system and loop
5. Eventually the AI is confident in the result and present it back to the user, possibly with the changed state, or at least a summary of what the changes are, which could be a function call, or a function next state result, so it can be merged with the main system

The output looks like the blockchain transition function - initial state, inputs into a transition function, output.  With the AI grinding to find the suitable outputs.

An extension is being able to make a function call into a system that cannot be rolled back, like an accounting package system.  Blockchain giving us good rollback ability with intelligent merge and conflict resolution makes it easier to work in business systems without shooting yourself in the foot, and leads to greater confidence in the system.
## Preferences tweaking that modifies the initial prompt
If a response comes back the user gives a command that sounds like "never use that word again" or something that indicates a long term preference, we should store it in a rules table.  Then we should attempt to modify the initial bot so that this rule is specified in some way, but more importantly so that the results obey the rule without specifying the rule.  So the rule becomes part of the test suite and the bot is tuned accordingly, not necessarily with that rule tho.

When we modify the list of rules, we should rank them, add conditions, and basically format them nicely so they can be inspected helpfully with the GUI.  We should also store somewhere else the exact record of where and when this rule was set.  So in general, all chats should be stored in a database, and then a background thread can always be churning up embeddings and going thru related things to come up with relevant input that can help the current topic.  Like a human, this background thread takes some time, but for computer, its recall can be perfect.
## Blockchain programming
We need to demonstrate the system doing some coding in a blockchain system, and doing some complicated pieces where it needs human guidance to get thru some complicated features.  If we can show a chain complex being upgraded based on some AI instructions, this is the big winner.

## Strategy for categorizing
Being able to provide strategies and test cases for that strategy (which can be improved) is key.  One such strategy is for categorizing files.  The AI could go thru each one and keep note of what categories it had already discovered, and then file each item or create a new category, where each one has a description.  Each time, it can update the descriptions and categories.

Once the list is complete, it can go thru the categories and see if any should be merged or replaced based on similarity, then goes thru and sorts each item inside that again.  If the documents are long, it can do the merkle summarizing technique on each, or do a fine tuning task on each one and use the resulting model.

This sorting could be done in conjunction with a human, and once done, it would automatically handle the categorizing using those rules from there on.  When things don't fit, it would change the rules within some boundary, and the original rulesetter would get notified.  It might have some goals like ratio of categorized things vs not, ease of location, and user feedback about where they think things should be.  Any disgruntled user can easily say what they want to happen, and we can give them the view specific to them, and incorporate that back into new views for people too.

Can give a graph of how well each item fits in each box.  Graph the size of each box easily.

Such a system could be hooked up to onedrive or dropbox to allow enterprise data organization to be a lot better.

## File renamer
If a large file operation needs to occur, then the ai can present back a list of files and then show the proposed filesystem.  The proposed filesystem can be on the real filesystem in a temp folder, and so the user can inspect it the way they would a normal filesystem.

Can include some processing steps in between, where transformers or other types of jobs are run, possibly using AI bots, like the blurb writer.  So the game inside orgs becomes building these little apps themselves, which they can connect up to different workflows to do things for them, like blurb writing, and they get continually updated by feedback from different users.  The user feedback is merged in some weighted way, and whole workflows can be automatically rerun with minor tweaks

Could do an offline version that used the files management in the browser, or that gained access to the filesystem directly, and then proceeded to modify things in a protected way.

## Do a presentation using the anything app
The slides any everything for this presentation would be edited and modified based on feedback live, in the meeting.  So you start as looking like a slide deck, but you expand out to showing how the chat interface works.

## standard format retrieving tooling
Set of standard packages that let you define a format and then constrain the response from the AI to follow that.  Eg: pumping in a bunch of paragraphs and getting back which ones are relevant to the prompt being asked.  We can use gpt3.5 for this with a large context window, and then use gpt4 to formulate the actual response.

So you would set a goal of getting back some structure, and it would select the best strategy from the ones it knows about.  The strategies have test cases where they work for different things, and the AI chooses which ones it thinks suit you best.

## Selection via continuous text input parsing
Run each new chunk of words thru gpt3.5 and see if anything refers to line numbers in the stateboard, and highlight them if so.  Gives user good feedback as they type.  Works in terminal as difficult to get selection tools.  Web can let the user select directly.

## Loading a bot within a bot
This doesn't make much sense without having a wrapper around it that tells all the bots to switch based on which bot they think is best suited to answer.  So we should ban bots within bots, and only allow a router bot to load multiple bots.  Loading the bots needs to generate a summary of the bot.  Bots themselves may also be a router. The loading of multiple bots should only be allowed by a special bot loader that generates summaries of bots for switching. But should the switcher always be the same ? Switcher would have a default bot which handles all else.  We can test multiple versions of the switcher to see which performs the best.

## Automatic bug recall
Whenever someone asks for something, if a discussion already happened around it, we should be able to use that as part of the knowledge base to inform the answer.  Basically every interaction should be part of the knowledge base automatically.  Whilst it dreams, we compact and search for meaning.

## Editing a bot file should show what books will load
Interestingly the syntax is so open that it was confusing at first.  The editor should help you by telling you what files will get loaded after you do each edit of the window.  Edits should show in diff view until you press enter.  Any extra window may show the loaded files.  You can then jump to edit them.  This is part of the realtime feedback type of UI interactions.

## Sloppy CLI
Be able to run a cli where the commands are approximate, have some help built in.
Anything you do is sent back to you for a second approval step before doing the command, so you know you have some safety.  It says what command it is going to do, what files will be affected (since it ran the simulation and knows) and a summary of the impact, along with what it thinks you are trying to do.  You can chat back to refine this by telling it more about your goals.

This can be good for bash scripts, since you can write a script that starts as a series of plain language tasks, and then give it a set of systems to run on, and it works thru each one testing the steps with you.  Presents as a workflow graphical file.

## Inducting the blockchain model
Blockchain model of the chains and the bots, so we can test them independently.  The AI should be given tooling to process and parse blockchains so it can do accelerated iterative generative testing and enhancement, providing a form of self improvement.

We should be able to use this generative feature to build out its own model rapidly, so it can add features to itself, like token count, balance management.

## Generative query
This is the means of having a natural language query on a dataset be generated by parsing the dataset to make a layer of generated data, that may also pull in and summarize info from other sources.

## Auto bug filing and summarization
A way to detect and log when messages were asked that we gave bad responses to.  Then to accumulate them into a type of system solution.  Then slice and dice the proposed system cuts using gpt4 to be rearranging how these responses are classified.  Each fail is logged against the tests for a given bot - gp4 should know when we failed.

So each time such an interaction is detected, it should get summarized up as a bug, where multiple similar bugs should be merged into one, so the humans can focus on relevant chunks of work.  The exact bug gets filed as raw data that will be run when confirming if the upgrades have passed, to prove the fix and to prevent regression.  Summaries that reduce these down can be introduced so prior data can be pruned.

Each new release these bugs are checked if a component that generated them was altered, so we can know if they got fixed when solving some other issue.

This is really trying to include the github workflow into the app directly, with auto detection.  Can signal to the user that a bug was filed, since it didn't like its response.  User can dig into that more, which draws them deeper into the dreamcatcher.  Being able to talk with it about its operations is key.

## React components as prompt components
Component render tree tracing, where the bots that generated a response are modelled as components, which can cause children to get invoked.

The model tree, if a component has unchanged props, then no need to call it against the model, so use the cached version.  Rendering of the tree is separate to the generation of the knowledge tree.

We need some way of making a tree of components of different info and models, in a way that encapsulates the error loops of the models.

This could just be chain objects tho.

Standard way to handle error loops, token usage counts, tokens being too long, set the temperature of the prompt, etc.

So want to make a system by starting with some base prompts to get a feel for it, then include various capture, process, and formatting loops to be able to get out the result you want from the component.  Each component might be better modelled as part of a flow, so different pieces can be assembed together (maybe by the AI) and they are strict about how they fit together, and how they error.

These workflows should have graphical equivalents, particularly with status updates, since they can take a while to generate, and should leverage parallelism, and help a user see the plan to come, and what has been executed thus far, as well as see when the plan changes.

They should see an error loop taking place, where the model is struggling thru getting the format of something correct.  The history page shows what actually happened, and the plan shows what will happen, with the cursor showing what is currently happening.  Could include caching as well.

Piecewise summarizing component could be drilled down into to get deeper levels, and could ultimately retrieve the actual reference for the concept or part that was used.

DB query component, can handle row by row, with parallism.
The component behaviour is defined by its covenant and its config state, then model calls are shown as actions.

A component that generates a workflow using the known components that we have, then loops to assemble them together in a way where the logic fits.  Check the library of existing and tested assemblies to see if we can use something already in use, or break it down into smaller bits.

The current state of the chain tree can be read using components, so as results stream in, the chains are updating, and the the react components are rendering things that are changing

The key to the whole thing seems to be making an app that you can automatically file bugs and feature requests, and can experiment with making the app change to be how you want it to be.

? how to make it build up a blockchain app with covenant logic that triggers things to be done ? consequences ?



## live feedback on your prompt
say when it is going to be interpeted as multiple instructions, say what parts are missing some context, etc - help the user get it right first time.

## DOS interface
If you hit an action directly, we can just execute that, else it goes off to gpt for some processing.  Close commands get corrected and explained, possibly across multiple chats.
Otherwise, considered part of the natural language interface.
Actions taken within DOS by the AI are shown in the history log.
Embeddings inside a collection, with the children holding the full data.
May be able to do the vector search on chain, since it is simply cosine similarity that matters.

UI needs to have a presentation layer, a blockchain app layer, and an AI layer.

## CRM
geocoding of places - shows up locations that were near to what the person said.
If on whatsapp, they can send in their location.