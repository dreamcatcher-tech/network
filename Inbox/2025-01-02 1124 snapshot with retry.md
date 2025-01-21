
>[!tip] Created: [2025-01-02 Thu 11:24]

>[!question] Targets: 

>[!danger] Depends: 

IF we tried to commit but the target branch moved on, by default attempt to apply the changes again, provided no conflicts would have occured.

Also be sure to reconcile out zero changes, if you saved the exact contents over again.

Allow a flag that requires strictly that we are at the same commit as we saw.

Good practice is to loop while you're getting errors, with some kind of retry.

We might allow this to be passing an update function to the snapshot, so that if it fails due to a loss of coherence, then it will run the function again, until it completes.  up to some retry number, then we throw.