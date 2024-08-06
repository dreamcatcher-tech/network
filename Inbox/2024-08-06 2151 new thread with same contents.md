
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