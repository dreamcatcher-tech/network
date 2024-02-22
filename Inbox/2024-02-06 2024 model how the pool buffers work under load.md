
>[!tip] Created: [2024-02-06 Tue 20:24]

>[!question] Targets: 

>[!danger] Depends: 

Should be able to make an NL model that shows how the pool would behave under extreme load.

Can redesign different means of processing, like the commiter always doing all the processing, or at least all the parallel processing, so the tip is always at HEAD.

Maybe the worker threads can be assembled from parts, so we can play around with different configs ?

Perhaps the NL could compose different arrangements and see how they play out under load ?

So the model would describe what functions had to happen, and would list what different arrangements could be made, and would have a set of test functions it could use to exercise the system.

Other rules can be exposed, like how there's no point running the commit rate faster than the tip, since what is gained ?  so head and tip might as well be the same thing.

But if each task is as light as possible, then surety is highest.  Also the recovery is better, it seems ?
Ultimately we want tasks that always idempotent - they set out to do something, and if they realize along the way that it has been done by someone else, the gracefully end.

Possibly using atomics means this could be done more rapidly, but with a higher chance of atomic tears.

The rules and relationships can be discovered cleaner using these modelling methods.

Also recovery processes - if we had a lot of waiting processes, which cost nothing to wait, would we be able to make them all able to do recovery in the event of a failed processing ?


We should list out all the jobs that need to be done, and how some paths of job doing require other jobs, and some don't need anything.
If these were analyzed atomically, and kept updated by AI, then it might be easier to envisage the whole codebase, and we would design things differently ?  Start running simulations early to figure out what is worth optimizing ?

Then interface design could be done, and code could be built in tiny little pieces, possibly by AI.

Should be able to calculate ratios for relationships between different parameters of the machine performance, like queue delay average, delay variability, message size, etc.

TLA+ would give the mechanical correctness, and the reasoning model would give performance enhancements.  Then as people learn more about the modelling, we can run their knowledge over everything in the background.

Model db writes and reads, and be able to O notation style delay calculations to compare different solutions to the same problem.  Also show solutions with different reliability scores, when different components of a system fault, like network or storage.

Set of rules and equivalences, like how dispatch into a cloud chain is the same as dispatch to a local chain and then use chain joining to get it up there - so might as well just go straight to cloud ?  Or store a backup locally, where local takes over if there is a network issue.

We could then list the top level goals of the project and the tech required to achieve these points using atoms of reason.

In distributed systems, a lot is implied, so we should document that reasoning, to avoid making a mistake, like relying on a key being null as meaning something in our system.

We can talk about the guarantees of the system, like sequential actions never resolving out of order, so we can show how the claims of the system pass down thru different capabilities, and where the fidelity is lost, such that lower level claims don't make it up to the top for whatever reason.  The goal should always be the strongest simplest claims should make it all the way thru the system.

Claims can link to source code that shows the claim being exercised.

These can be merged with issues and desires as the system gets built, like wishing that we could remove a nonce from an action, and why.