
>[!tip] Created: [2022-12-20 Tue 10:26]

>[!question] Targets: 

>[!danger] Depends: 

If an application is modelled as git, with a main branch, then any offline activity is just treated as a fork.  With no quorum required, splinters can form that can arrive at their own opinion of "most correct".  So in a netsplit, multiple users would continue to operate, with a changes being negotiated between themselves, then ultimately a merge is proposed to the other group, once network has been restored.

If the UI can gracefully handle any kind of merge conflict, then there need not be this requirement for quorum, as all changes occur in your own branch, then you attempt to merge in everywhere possible.

This is highly performant as all changes are batched into only their diffs.