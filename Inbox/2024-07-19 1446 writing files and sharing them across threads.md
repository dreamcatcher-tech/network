
>[!tip] Created: [2024-07-19 Fri 14:46]

>[!question] Targets: 

>[!danger] Depends: 

If we make a new file, like an agent, then it needs a way to write its files back to the parent branch.

So a thread should list its dirty files somehow ?

What does just saying "backchat" do ?  Should this just focus backchat ?

Needs to be an action to the parent, that will include what files we want to merge.  This is the PR action.  Then on receipt, when running in the parent branch, it decides what to do there, and can handle errors intelligently, with helpful error messages.