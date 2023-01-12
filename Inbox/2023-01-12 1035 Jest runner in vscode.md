
>[!tip] Created: [2023-01-12 Thu 10:35]

>[!question] Targets: 

>[!danger] Depends: 

There is not need for the filesystem to be on the same machine as the cpus that process those files.
Jest runners, or any other function, just need to perceive a filesystem.
So instead of codespace requiring an entire VM, we could supply jest runners looking at a virtual shared filesystems.
The runners would stop when not needed, but we would make as many runners as there were tests to run.  So for 500 tests, we have 500 runners, so the total run would only take as long as the longest test to complete.

Jest multithreads like this anyway, so it makes it easy to make this threading be on another machine.

This could be far cheaper than codespaces, and also far more powerful since it has good burst.
Each terminal would be its own chain, and would execute in side effect land with configurable cpu and ram.  Could take as much ram as it needed with no ceiling and just bills you for what it uses.

Enable a feature such as wallabyjs cloud, where the runners are all on a remote and powerful machine.

Filesystem can be integrated with git, so local editing appears like a fork, and then when committed it adopts the same hashes as git so less to sync.

Make the CI actions be the same as local actions, so the CI is watching live and running on separate machines.

Each extension can run in its own chain, if remote.

Running something in terminal, like a dev server, is a side effect running on some remote machine.  Give a different machine for each terminal, unless specify that you want them all the same.  Ram is burstable and will increase and decrease based on memory pressure to minimize your billing.

So if you're just editing, this codespace usage will be near zero, and much of the labour can be handled by your local machine.  Compute heavy things can instantly burst up in a new chain which can call on multiple chains.  CI is just another chain, and nothing special, so only have to provision CI once to get your dev environment and your CI one.  Yarn install is handled in a chain and then shared readonly / forkable between all users, so it is very fast and light.

Share your codespace then lazily fork it out, rather than being stuck with this uncloneable mutable thing.

Open source projects make the editing be open but it is free using donated resources.

Intercept the kernel calls to process.fork() and make a new chain for this purpose to hold the process within.

Share your entire dev environment at the instant you raised an issue with a problem.

Can also run the whole thing on your local machine, or you can make your local machines contribute compute resource to allow you extra power for free / with low latency.  Then you can also auction off your excess capacity to the highest bidder.  Optionally donate to open source projects that you like.

These same resources can also serve as hosting for things like webservers, or chain services.

Make a strong gateway that hosts static content and then allow more transient computers to provide chain compute for services.

Weird to have save files, unsaved files, and committed files.
The filesystem is a type of commit, so why not just make it all be uncommited, and edits are just saved instantly to chain ?
Can make a form of micro commit if you want to take a little snapshot, to go back to or to cause file runners to kick in.

Could share little gists of code around with a full environment attached, and access to large compute resource to try it out.  Same as the [[2023-01-11 1905 Comparators site]].