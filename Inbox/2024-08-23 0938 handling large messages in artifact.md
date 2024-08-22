
>[!tip] Created: [2024-08-23 Fri 09:38]

>[!question] Targets: 

>[!danger] Depends: 

Either use references to the values that are written into the db, rather than the values themselves directly, or commit them to git as an object.

Deeper, tools that return large amounts of information should write to disk and pass back a file reference.  Then the bots can read those files using tools instead of bogging down the whole context.

Or summarizers could work to chunk those things down automatically so it doesn't really matter if they are in context as they will be ejected out.

So somehow we need to raise alarms when large actions move thru the system ?

api should have a tmp file that it can generate.  This would maybe get skipped from the repo ?  or periodically purged ?

Passing up a large transcript is a legit operation, but it might be limited by what openai can process.  We should maybe encourage or auto change it into a text attachment ?  If the paste was large, make it a text attachment.

At some point, passing around large actions seems valid.  But who says what this limit is, and what should the error behaviour be at this point ?  Should the api error an suggest using a binary layer ?

We could technically support unlimited sizes in the actions.

If the actions had a binary payload with them, would this make a difference ?