
>[!tip] Created: [2024-02-23 Fri 11:03]

>[!question] Targets: 

>[!danger] Depends: 

The index file is large, and has an entry for every tracked file in the filesystem.
It is impossible to break down as it has a hash of the whole file.

Turns out we don't need it tho, if we build our own trees for use in commits, based on what we know changed in the filesystem.

So we would hook deletes and writes, and we would defer all the stringificaiton that would likely occur until the end.

So this means we can make all chain activity extremely light, even as the repo gets very large.

Sending patches needs a cursor to mark where the receiver is up to.