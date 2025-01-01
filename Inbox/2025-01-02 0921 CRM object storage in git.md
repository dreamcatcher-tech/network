
>[!tip] Created: [2025-01-02 Thu 09:21]

>[!question] Targets: 

>[!danger] Depends: 

So we're definitely doing object storage, and we definitely need an in memory version to mock the interface.

It need not have delete functions, and it does not need an exists call, only write and read.

Needs a commit and some basic branch controls ?


Change detection in moneyworks - we might enable change detection so that it hits a remote url, and then this causes the local poll updater to pull in all the files.  So start with polling, see if that works ok, and then do the triggers if it is too much to handle.  Ideally, we'd get everyone off moneyworks so that nobody notices if it is slow.