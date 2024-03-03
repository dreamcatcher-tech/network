
>[!tip] Created: [2024-03-03 Sun 18:43]

>[!question] Targets: 

>[!danger] Depends: 

If the commit also stored record of what active children were running, then we could have a guaranteed snapshot by walking down.
So the child cannot close without the parent accepting a merge in from it.

We might not know the latest commit, but we would know for sure if the child was still running.

If a noClose child had something left in io.json, like the request was left there always and not blanked, then this keeps note that something is open ?

Seems better as something explicit in the json file, like branch.

Part of pooling could be to update the hash of all child chains.

If there is a large number and they will exit on close, then when the merge back in, we will have their commit hashes then.