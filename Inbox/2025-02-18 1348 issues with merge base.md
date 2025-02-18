
>[!tip] Created: [2025-02-18 Tue 13:48]

>[!question] Targets: 

>[!danger] Depends: 

Merge base is hard to handle when we are presented with two branches who just merged.

In this case, we should return the latest merge in, so we know we are in sync.

The general solution for the merge base is different to our special case, where if we know that the last commit on ch was in fact mw, then we know nothing is changed.