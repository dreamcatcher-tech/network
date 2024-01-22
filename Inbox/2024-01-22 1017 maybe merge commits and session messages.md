
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

To do it with our current model, we would do some paginated walking 1 commit at a time and build up our own model in browser.  Then use some render components that could interpret this branching graph.  We could nest the timeline components inside the timeline to avoid using a new library for doing git graphs.

So if we had the commits as objects, then we could apply a temporary filter to get the latest session file ?  We might need to do isolation tho ?

But because we are only doing one branch at a time, watching the latest file for a branch should be easy ?  We would update the view of the session file, which later will be assembled, but for now is copied directly and triggers state updates when it changes.  It would be related to a branch so the subscription would only change if we switched back to that branch and started modifying it again.

OR out here in the ghetto, we could just draw the branch in the timeline with some decorative icon ?

The good thing about commits is that they are guaranteed not to change, so we can read them in slowly and store them for the life of artifact.

Could the UI be rendered in mermaid, then it really is just a plain text file somewhere, and can be formatted and modified like any other file in the system ?

Input is really just setting what the checked out branch is, which says where the IO goes, and we might also change what the isolate invocation is, depending on some other text file.

The visualizer of the git graph is not the same as the chat UI component, since the git one needs to show techncal info.  It could be used as the runner if you want to run a bot inside the stateboard.  Just use the gitgraph svg viewer maybe.  Make a large cytoscape gitgraph viewer.

Branches can be just a ToolAction item, since they occur when a help call is made.