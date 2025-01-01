
>[!tip] Created: [2025-01-02 Thu 09:21]

>[!question] Targets: 

>[!danger] Depends: 

So we're definitely doing object storage, and we definitely need an in memory version to mock the interface.

It need not have delete functions, and it does not need an exists call, only write and read.

Needs a commit and some basic branch controls ?


Change detection in moneyworks - we might enable change detection so that it hits a remote url, and then this causes the local poll updater to pull in all the files.  So start with polling, see if that works ok, and then do the triggers if it is too much to handle.  Ideally, we'd get everyone off moneyworks so that nobody notices if it is slow.

How can we mock the xml extraction ?

storage needs a watch function, to be able to see what something has changed.

? should repos and branches be specified in the url path ?

The fact that the git repo is remote or not has no bearing on the outcome - we could think of it like we have a git repo locally, and we have a limited interface in to it.  We update the main branch as the canonical reference of the state of the moneyworks server, and other processes on the machine make changes to the 'changes' branch, which we attempt to push into moneyworks.  When the changes branch equals the moneyworks branch, then we are in sync and the data in the changes branch has been synchronized with moneyworks.

We will need to do reverse reconciliation when main changes and it wasn't what we wanted, and this would trigger other update processes to occur.  At the very least, we would copy over the changes and put them in to the changes branch.  This would trigger a poller comparison, but because no material change was detected, it would do nothing.

