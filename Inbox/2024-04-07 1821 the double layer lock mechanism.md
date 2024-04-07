
>[!tip] Created: [2024-04-07 Sun 18:21]

>[!question] Targets: 

>[!danger] Depends: 

Repo lock sets a index.lock file in the root indicating the whole repo is paused.

This is set at the very start of a side effect to do a clone.

Only when the clone fully completes is the lock removed.

This means the effect can fail at any point, and the repo will still not be considered open for business.