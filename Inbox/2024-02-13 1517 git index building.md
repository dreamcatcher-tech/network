
>[!tip] Created: [2024-02-13 Tue 15:17]

>[!question] Targets: 

>[!danger] Depends: 

The staging index seems to honour the nocheckout and skip parameters, so to get an index file that represents the unchanged index, we need to build this ourselves.

So if we get the latest commit, grab the tree pointer, read that in, then manually updated it to what we need, then we can avoid checking out the git repo.

We would then write it to disk.

Then when we commit, we use this index file.

Or we could check out all the files, just to create the index, then delete them again.