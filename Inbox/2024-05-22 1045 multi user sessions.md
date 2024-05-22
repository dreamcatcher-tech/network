
>[!tip] Created: [2024-05-22 Wed 10:45]

>[!question] Targets: 

>[!danger] Depends: 

When an action comes in from a second user, what should happen ?

The thread should complete the response from the assistant, then add the latest request.

So does the new action coming in need to wait for the previous operation to complete ?

Should this be a system level config, where we can set it into single threaded mode ?

This is synchronous mode.  Usually in a thread, requests are processed in order of arrival, BUT if any request is waiting on anything, the next available request in the thread gets processed.

We could restrict it to be only a single external action is processed at once, but all accumulations are processed in the thread ?
This model would make multiple session inputs be sane.

Should we have to wait for a file to change a value ?
If we allow a process to hook a file and resume when that file changes ?
Then it can wait until the file has become open, race to get the lock, then proceed.

strangely seems to work just fine actually 