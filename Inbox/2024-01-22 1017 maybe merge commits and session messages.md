
>[!tip] Created: [2024-01-22 Mon 10:17]

>[!question] Targets: 

>[!danger] Depends: 

Issue is that session files exist on each branch and we need to walk the branches to get each one, and whats worse the session files are only at the displayable state at the end of each string of commits.

So if each commit held just the session elements that it was responsible for, then this might be a simpler way of parsing for display ?

Trouble is that writing to the full file is always easier.

Session would be reset at the start of each branch.  getting the session requires walking the commits for that file.

We would find the mergebase of two branches, and then walk each one back until we found mergebase, indicating a fork in the process.

Seems much less effort to seek out the end of the branch and show the session file as is there.

But then what does it mean, to show the commits in the branch ?  The commits are so closely related to the session, and what if we want to fork off from it ?

So if we made a 'recoverSession' function that walked the gitlog and assembled the session based on the log.
Whats great about this, is that the sesion gets blanked each run by default, rather than requiring some special case.

Detecting when the branch occured would need to be sniffed from the io file

Detecting when another fork occured that should be followed would be done in two ways.
1. When the merge back in happens, know we have a branch to walk, so can get the point of divergence and start waking that
2. When the IO first had a fork action.

If the IO was kept indefinitely then we could use it to always know

But then IO should get treated the same, where it gets trimmed after each commit that changed something.

So the UI should be showing commits, and these should be easy to filter, walk, and otherwise interrogate, as this is crucial to how apps get made on artifact.  BUT maybe we don't care, if we are supplying NL apps only ?

To do it with our current model, we would do some paginated walking 1 commit at a time and build up our own model in browser.  

The good thing about commits is that they are guaranteed not to change, so we can read them in slowly and store them for the life of artifact.