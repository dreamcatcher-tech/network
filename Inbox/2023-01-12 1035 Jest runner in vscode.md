
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

There would be no boot time for codespaces and they would work offline or during intermittent network easily.  Would be like 

Run multiple branches simultaneously - so we could dance between git branches while at the same time dancing between branches for the node_modules folder, so we can see the impact of another persons node_modules on our particular branch.  Each folder and file can be treated as an independent git repo, as git is built in to all files and directories seamlessly.

If Git was a part of all files by default, would we still need git ?
File saves would be commits, commits would be like tags, and tags would be like, releases (or something - super commits)
A git based filesystem.  Git native fs.
Might need a platform where these files get shared around and provide a web interface to them.
Dropbox alternative would treat saves to the fs as a commit to one of these shared files.

SaveAll would be atomic.
Stepback / undo could be across multiple files, and would be part of the filesystem, not part of the editor.

Basically could offer something like dropbox and git combined, with additional cloud compute apps able to be installed.  Provision these cloud computers so devs can set them up and then keep forking them as project isolation is required.

## Implementation
Agent runs on the local machine keeping the fs in sync with the cloud version.  Takes into account file modifications that have not been saved, and have not been commited - so 3 states for a file to be in.  All these states are continually synced.  Tools provided to view sync performance.

The fs is an app that is attached to a cloud machine.  This machine can have other apps installed that can do different things with the content of the files.  Some of those apps can coordinate with apps on other cloud machines.  One such app is the jest runner, that scans for jest files to run, and begins execution.  This app would make one derived chain for each jest file it found.  This jest file would be executed in an isolated container, and then the results sent back down.

## Propose wallabyjs cloud
If we could sell compute services for running jest tests in the cloud from the command line, we could propose to wallabyjs that they sell a cloud version of wallaby that lets wallaby automatically use remote resources.  Can donate your own resources and earn funds.  Can set up remote runners on your own machines and get private cloud.  If they refuse, could look at implementing the same visual tools as wallaby, but being cloud first.  So the software would be free, but the compute costs money.

Set different price points for responsiveness, latency, parallelism.
Paying for compute allows you to get far more now than you could by owning the compute - the value proposition for renting a server vs owning is not clear compared to value proposition of burstable compute.  This same principle applies to staff.