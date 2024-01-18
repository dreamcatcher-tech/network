
>[!tip] Created: [2024-01-14 Sun 19:49]

>[!question] Targets: 

>[!danger] Depends: 

Session is needed so we can render what the to and fro messages were.
Some of those messages are strictly formated, as in function calls, others are natural language, where the formatting is semantic.

## Options
1. Make a new file for each session referenced by the commit and request id that started this session running
2. Make a new branch
3. single session file with names to filter the flows out
4. use the IO channels as the session log

Run each running instance inside the same IO channel, where it uses loopback to invoke different helps ?

Commands in helps is like dependencies in npm, but the help is a command format that has dependency on other commands.
The call out to any given AI could just be a command ?
Helps are special in that they call a command that needs to use other commands, so it loads up a specific command with access to other commands.  Those commands might be helps as well.

Theres a difference between the help itself and the execution thereof.  The execution needs to relate to whatever action triggered it

But the session could be any kind of file update, so the session is really just a type of output.
Given Daves session, this file should be related to the chat-1.io.json file and tagged to it.
Want to use branching to separate all the threads, rather than a large number of files littered around ?
But then to get these session file back, we have to walk the branches and accumulate them ?
This seems good from a gui perspective, since it keeps the main branches clean automatically.

If there was only ever one session file and one io channel, then the IO channel AND the session file are unique to the process execution, and the history can be fetched by using the branch.
The initial chat between HAL and Dave is just a long running process, taking place in a dedicated branch.  To gain access to it, you need to walk the branches.  A session file is unique to a chatbot api call, and the convention is that we store this session file in parallel with the IO channel that is driving the activity.  The session file is what gets sent to the openai call - it is the state of the system during these calls.

So for initial chat, browser could load up the session file and that would be exactly what openai saw, and to see what the runner saw would require opening up that branch.  Closing the branch is replyIO.  To show the runner, have to get each call out to the runner.  Can do this by viewing the branch history.

Alternatively we can name session files by the branchid or some other non colliding id, such as the action id.  We should be able to pass the calling files session file along by being able to read it if we need it.

The chat is a long running process that never exits, but the runner is.  Actions come in to the chat process, and replies come back, but the session file and the IO channel is never destroyed, since the branch never gets merged in.  The runners get called on a branch, and this branch has its things destroyed.

The merge commit can do the file blanking when the io reply is being handled.  At the same time, the merge driver can trigger the promise resolution for any processes that were awaiting a response.

We can simulate this behaviour by having a global write lock so that only one promise at a time can write, until we can have isolation between processes.  Git is the concurrency protocol, and the only time IPC occurs is during git merge.  Into repo is a special kind of merge where a certain file is livened up to have special meaning.

The session file and the io file seem identical, just different formats.  The IO could switch between calling different isolates based on what the action was.  So instead of specifying an io file, you specify the isolate you want to call.  So IO can call any isolate, since the actual io file is insignificant, other than it is livened up by some processes.

## muxed IO channels
If the action says what the isolate is to be, then the IO channel can be used as the session file by way of filtering.
There only needs to be be a single one on any branch, since this represents where the current process isolation is running.
Merges need to consider this and reconcile the IO.
The act of merging is to reconcile the IO back up to the parent, and optionally delete the branch if the process has ended.
Result is that master has no IO on it, only branches have IO.
Starting a new session is to start a new branch.  A mounted repo would be used to allow multiple threads to write on it.
So the refs folder in git is the procman
This seems unlimited and simple as a set of rules - maybe the smallest set of rules for managing execution based on git files.  It injects a single git file `.io.json` 

Making a new branch would give access to the IO file at the point of invocation, or it should zero it out / reset with the command that was given to it ?

Priming the `.io.json` file - if we set it with something to start with, then at boot, it will execute the action, which could be long running.

BUT for recovery, the branches aren't stored anywhere ?
We could add the state of the refs folder to the consensus tag ?

io is processed concurrently, with each one being executed in its own private view of the repo.

We make a special field in the io file that tracks the branch ids and HEAD of each branch that we created.  This should allow recovery if all we have is the master branch, since we know what objects to look for.  This commit with the branch info in it is the start of the new branch.

This file is kept inside each action branch, and can be used to build up the process tree, meaning that no branches are left dangling.
This file could be replaced with entries in the io file, that list out the branchids, so we can recover or rebuild, knowing we may have lost some things if we cannot recover the objects.
This file can be used to track consequences, singe we just walk the branches to get a tree of what we're waiting on.

? how would a daemon process be modelled ?  possibly needs a special flag ?