
>[!tip] Created: [2024-08-06 Tue 21:51]

>[!question] Targets: 

>[!danger] Depends: 

Threads are peers, but they need to be able to inherit or be a clone of an existing thread.

Be able to pull the last message out of a thread, rather than rewriting it into a file.
Pull in the pieces that are in fenced codeblocks and write straight to a file without having to regenerate the tokens.

isolate functions to manipulate large objects without touching context.
eg: the test runs object:

Each run can be an object that gets pushed onto an array, which can be exceptionally large.
When it does the push, it can also update statistics on the top level summary object, like run count, statistical results, and optionally make an AI call that summarizes the outputs.  May log more details around failure reasons.
Check the runId is still correct, as we should never be writing to a superseded run.

But could this be done in a generalizable form ?
Like be able to decorate any object based on its schema with a function that can read and manipulate it ?
Then we could use isolate function mappings to make these nice for the model to call, but under the hood, and in NL, with a bot to help, we are just 

This probably falls under the clause of thread parsing, where we might want to extract out files from the thread without going thru context, or we might want to start a new thread with some parts of the prior thread ?

It might be easier to run thru context but set temp low.