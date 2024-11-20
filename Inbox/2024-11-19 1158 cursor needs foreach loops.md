
>[!tip] Created: [2024-11-19 Tue 11:58]

>[!question] Targets: 

>[!danger] Depends: 

Be able to come up with a loose workflow, and then tell it to loop over all the files.

Means we could trawl a large list of conversations, and update a gold standard of definitions.

tools in cursor - should be able to run little code tools and extensions that we add ourselves.
cursor doesn't seem to do concurrent running, cannot explore multiple paths.

Their monetization depends on them running the AI for you, rather than letting you do it yourself and combinging things from others.  Dreamcatcher provides a better way to combine offerings together uniquely and monetize the combination for the benefit of all.

Need to be able to make little agents that act like little tools that can be called upon.
Should be able to work in swarms, and can be combined to produce new tools.
Have triggers that can run when you do anything.

Then the workbench that makes the tools should be the same as that which runs the tools.

These can include linters, and can trigger on different lifecycles, like when anything gets modified, saved, commits, or when other tasks complete.

Loop over all files an extra using a specific agent, to reduce down to updates to a specific reference file / gold standard.

Give it the reference definitions, and then get it to recurse all the transcripts.

So then after we talk, the idea is we spend a bit of time reconciling back in, and then summarize the changes with the commit being released.

Cursor doesn't have stucks in band.  Also I can't change or fix their bugs in any way - their business model doesn't allow it.

Filters where we can gather a list of files that had some ai tooling run.

Being able to make your own agents, separate to the files you're working on, like bringing one repo to bear on another repo.

When we change the format, or the bots that we can extract with, we should repeat the process again.

May include corrections that we use to patch the incoming info to make reconciliation easier ?

Common corrections in the ingestion pipeline might be useful ?

Be able to process each file in full context, not in chunks, by processing in batches.

Lacks large scale reasoning by way of looping a for loop over each file at a time.

When reconciling, consider the changed file against every other file, and look for mutual changes.
Then of all the changed files during recon, compare them with each other file one by one, making the next layer of changes.  Continue until some stability threshold is reached.

Needs meta controls, where a chat can call up some tools that will work on files, rather than contents.