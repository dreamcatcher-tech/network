
>[!tip] Created: [2024-06-05 Wed 14:57]

>[!question] Targets: 

>[!danger] Depends: 

to avoid having to walk the git structures, we might store sessions of branches, or at least record of branches, in band along with the messages ?

This way, we can have the messages array, and can instantly know which ones had forks, and know how to go get those.

The merge commit should give us everything we need to recover the messages file object.

Or, if we built up the messages using splices, then branches are just splices too.  MRU is useful for loading characteristics.

But building up from git logs makes it hard to do compression.
We could store each commit id when the message occurred in a mapping based on message index.

Having commits alongside messages is useful since we can display that in the UI.

So we could store the truncated session in full, then use splices to retrieve earlier conversations, which would be compressed using a RAG summary or something.

Walking branches is essential tho.

Once have this ability, then could have a generalized explorer.

So make ability to get a specific splice, then ask for a range of splices from the server, to speed things up.