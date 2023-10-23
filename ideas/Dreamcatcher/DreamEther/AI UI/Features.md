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
This doesn't make much sense without having a wrapper around it that tells all the bots to switch based on which bot they think is best suited to answer.