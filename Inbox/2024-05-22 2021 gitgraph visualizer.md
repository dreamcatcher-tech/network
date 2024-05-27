
>[!tip] Created: [2024-05-22 Wed 20:21]

>[!question] Targets: 

>[!danger] Depends: 

If we stored the graph in mermaid form anyway, or at least generated it from the true git history (windowed to what the user can see) then the LLM should be able to understand what is happening and answer questions about it.

We can start with just a crude visualizer with a high detailed stateboard component to start with.
This could be perhaps toggled on and off until we know it is a useful thing to have.

May use an explorer tree to present in a more easily understood mode, with collapse and all.

Use the MUI explorer, and have a FAB with an action button that pops out when mouse over a node, allowing operations to occur.

Fork
Drop
Tag
Submit for help

Folder is the help that executes

May need to bind the commit to the session change more strongly, as somewhat disconnected currently.  Could store the commit in the session, so we can be lazy.

One visualizer for the chat history, but also a more powerful viewer / editor to perform advanced operations on the branch network.

A tree explorer works because due to the independence of branches, we can contain all commits in a certain branch, so it works by way of a transformation.  We can use icons to indicate when files were pulled in.  It is not strictly accurate, but it is more usable with the destructive simplifications it affords.

Add a 'file' to the end to indicate the eventual merge status, which might be a discard.  So a discarded merge has just an icon with no message attached to it.

The full viewer can be a gitgraph diagram, which is full raw git.  This can have clickability and action buttons and things so it can do more things.

Because mermaid is a text format, we can use chat to talk about it perhaps ?

The current thread can be the inflated nice gui elements, then top and bottom can be condensed down gitgraph views ?

Or have the tree navigator be a button panel that can be shown any time, or be asked for inside the AI.

Show all branches in a gitgraph tree
Build it up from git commits and walking the history backwards.
Gives us the debug view of what is going on, in realtime.
Configure with a max branch count setting to avoid getting caught in huge parallel threads.