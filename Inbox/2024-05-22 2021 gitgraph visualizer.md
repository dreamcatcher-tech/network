
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