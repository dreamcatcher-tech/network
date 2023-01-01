
>[!tip] Created: [2023-01-02 Mon 10:07]

>[!question] Targets: 

>[!danger] Depends: 

The method of informaiton moving thru the network should always be by PR.

Be rejected because master said it couldn't move - means the requester needs to merge master in first.

Use [Pijul](https://pijul.org/) to make the merge less conflicting.
May allow action order to be modified ? Or only consider the resulting state, since the actions should never be read again and serve only as the audit trail.

So the majority of operations happen within an app complex, with the result being a PR against master app root

Pool is an object
Branch tip is just HEAD + pool.
Validators sync with each other by continually seeking to merge with other validators.
BFT busting would be easy - can just share the branch of a validator showing different commits being signed.
Each message from the other validators includes all the included messages from other validators, so Byzantine behaviour is super easy to detect.

Make an algebra that describes how any blockchain system must work - anything with history and consensus.