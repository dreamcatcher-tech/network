
>[!tip] Created: [2024-12-02 Mon 14:50]

>[!question] Targets: 

>[!danger] Depends: 

 For company / project emails, in the shared company repo, the files and folders of the emails would be stored.
 
Email is good in that it is plain text on the wire, so makes it easy to store the authoritative records.

Incoming messages would just be stored in a big list.  This branch is the reference branch, storing input and output, using sharding to break down filenames.

Sharding is based on hash of content ? then each commit, store a list of changes, so we can walk the commit history and get the latest items easily.

Then present views of this data, which involve sorting, drafts, generated rendered views.