
>[!tip] Created: [2024-08-07 Wed 13:46]

>[!question] Targets: 

>[!danger] Depends: 

If we are running tests concurrently, in different branches, then when they come back, we want to update the status and update the central run file, then pull the next run off the queue and start it.

With the current design, all outstanding async requests need to return before the calling function is invoked again.

We could allow a flag to turn this behaviour off, in which case a reinvoke happens immediately upon a return, with some minor delay to allow system settling.

Or we could use a special function that is a queue where we set concurrency control on it ?

Or, make the actions be no batch when we create them, so that the request is flagged with run immediate, so as soon as a response comes in, we start up the isolate again.

Or set up triggers to watch the created branches so we can be rerun when the branches return, meaning effectively the same thing as watching an async queue ?