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