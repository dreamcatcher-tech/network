
>[!tip] Created: [2024-05-07 Tue 21:36]

>[!question] Targets: 

>[!danger] Depends: 

Now that each repo has a unique repoId, and since parent child relationship is stored in config files, what does rm mean ?

Where should an RM request be sent to ?

How does clone work ?

Should not be a central chain that gets messaged, but rather a special coded PID that calls the system host.

When should it be done ? just like executing any serial request, or in band ?

Should be like any other request, but when the transmission system encounters the system action, it is not in fact transmitted, but executed ?

Or, if it did in fact go into a dedicated chain, like perhaps the actors home chain, then repo management could occur ?

A request to self with a special isolate that triggers the system to run.

The null isolate, which calls very specific functions which are predefined.

Or it could be a genuine isolate, that just gets loaded with the context when it gets seen.

? Where do permissions get checked ?
Inside the special isolate ?

Make an isolate named `system` and call this like any other isolate.  Intercept the function calls to it inside exe and handle them separately.  Permissions are not important since it is a cost based restriction ?

If only a repo can rm itself, then it has a chance to quiesce ?

rm of a branch seems related - a quiesce move ?
Raise a flag that bounces any new actions in the pool.  These actions are replaced at transmission time with error actions.  Could just atomically remove the head, and keep retrying until done.
Could be an action sent to the branch but intercepted by the system, which then starts doing cleanup actions.  All in pool items are bounced with errors.  All pending actions are bounced with errors.

Could do a quiesce mode deletion, where it is allowed to finish anything it is working on, bounce new things, and then shut down ?
Disable and then wait everything to settle ? but this opens the path for deadlock to occur.
Halt and wait is different to hard halt.

Is copy branch the same as rm but with a new branch created using the current last good commit ?
Cleanup the pool should bounce everything that was waiting.

If we are reconnecting to a cloud instance, how can we know 