
>[!tip] Created: [2024-01-29 Mon 12:06]

>[!question] Targets: 

>[!danger] Depends: 

The clients should pull down log file snapshots.

A commit plus the worktree diffs, then they can receive triggers that say when files have changed.  They should be subscribing to the changes, as well as reverts, when a file becomes unchanged again, then they can subscribe to which ones they want, and get compact changes.

If we could avoid the github step altogether, get the server to pull from gh using native client, then stream down files to the client ?

Should be able to run in the browser, or in edge functions, or in ghactions, and all be the same - all just running on the web js engine, with backends swapped in and out based on environment.  Caches and filesystem types should be entirely dependent on where we're running, and the majority of filesystem operations should be in ram.

Required so we can rerun the operations that occured using git.

## Client side data injection
The user form submission should be in commit format, and this commit should get pushed up to the edge functions for execution.  This should continue to retry, rather than being slaved to the edge function.  The commit gets signed by the user.

Or, we could do a raw form submission, and then execute the function on the server.  This means that we need the internet, as devices cannot run locally.  Ideally we want things to run offline, and then where possibly seamlessly sync with the edge.  

## Model
The data model is centred around commits.  a commit+ is some dynamic change happening to a certain commit that is making changes to the filesystem before making the next commit.

## Streaming file changes
When the output is changing, like with streaming results from openai, 
Writes to disk should result in some hydrated state for that particular commit+ going down to the client.