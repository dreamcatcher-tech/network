
>[!tip] Created: [2024-01-05 Fri 14:26]

>[!question] Targets: 

>[!danger] Depends: 

The author of a commit is a process

A process is based on some function definitions, and will record its process thru the steps.

the procman coordinates all processes.

A repo is a coordinated unit of work, that may nest other repos within it.
A running machine has only one repo, and then has gitsubmodules inside of it.  Implementation details may mean these are along side, but the model is that they are inside of it, with a single running instance represented by the root repo, and then other repos, some of which are remote with varying access rights, and spliced in at standard junctures, like `/apps`.  Running the local machine is managed by everything in the root repo.

Side effects - these are handled by json files that follow the channel protocol, which is a simply way to manage streams of objects.  The objects are parameters for functions to be called, and the replies are json objects that came back.  Multiple users can contribute side effects for reconciliation by branching.  Quorum is when enough members agree that they can merge their views back in.  Side effects run using SES inside webworkers.  SES is used to restrict the network access or any other access that the side effect might have.  It may be given read access to a part of the filesystem it is operating on.  All the running of all the AIs is done within side effects - the only difference is which side effects ran first.  These side effects have the basic ability to read from the filesystem and call AIs with that data, then write to the filesystem.  There are core side effects needed for any operation, but people are free to include their own.  The AI should not be able to change the format of the side effect channels, or else things will break irreparably - just like you can't change how git works under the hood.

Covenant - this is just a simple function that has some context about how it can be run, what it offers the world, some provenance on where it came from.  This ultimately is a hash, and the hashed object is some metadata and another hash that represents the code to be actually run.  Inside JS these are run in complete isolation.  Sometimes they may include visualization components that can be run in an iFrame or in combination with other components.

Basically we are designing a computer again, with AI at its core, running all its logic.  Gource visualization would be awesome.

Merge conflict - this means a consensus fault, since if everyone is following rules, these should not happen.  There are times when the file tree might be manually pruned and updated, and a merge conflict here would indicate a bug being fixed.  Wide acceptance of the merge indicates consensus.  You can do anything so long as everyone agrees what it is.

Triggers - these are ways of declaring in the filesystem that when some changes are detected, this side effect will run, which can be used to enforce formats of files.  This might be commit hooks, since you should be able to do anything you like in between commits.  Commit hooks can run down the tree, based on what files changed.  If we wanted to avoid intermediary commits, then we would do a squash merge to remove that state - what is the point of changing a lot of files in an intermediary state ?

Format hooks - whenever the LLM tries to write to a file that needs to be in a specific format because it will be interpreted by machine, these hooks will trigger and will throw an error that the LLM must correct to proceed.  These are a form of trigger, but they don't cause any AI execution.

Tension - maybe the commit message should list things in tension when it runs ? or register with the procman to ensure it will eventually get served, where procman is a folder tree system that mirrors the fs, but is used to supervise execution that is owed.