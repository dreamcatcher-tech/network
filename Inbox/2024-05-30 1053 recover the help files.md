
>[!tip] Created: [2024-05-30 Thu 10:53]

>[!question] Targets: 

>[!danger] Depends: 

To display help files in the UI, the format is different to what is stored in the messages array.
We need to get the help file that was used at creation time of the messages item.

So this means going back in time to get the help file from the commit that created the first message.  If all messages were stored with the commit, this would be easy ?

The message items could store what the commit was that started the help file, so we can retrieve it quickly

Once we have the help file, we can display all the extra information about it, like commands, config, description.

A help displayer should be made.
This should be incorporated in a help runner, where the help runner nests the whole operation that the user is experiencing in a little box.