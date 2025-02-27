
>[!tip] Created: [2025-02-20 Thu 17:42]

>[!question] Targets: 

>[!danger] Depends: 

pijul isn't good for having a lightweight snapshot to work from, since it never actually stores the full objects.

We need a way to store what was the last commit when a file changed, so when we 

The most efficient way to do this is an entire shadow filesystem.
This could be a separate shadow branch, that just points to when a file last changed.
Otherwise we need each file to store this info with it, so we are changing the structure of the data.

Or, we could build up these indexes totally separately, so any given system would walk all the commits and build up their own index of this information, which would probably take the shape of a shadow fs.

Or we could write in hidden files in each directory, which can be walked back thru. 

We could modify the tree entry format to include something extra at the end, that includes what the commit that last changed an entry was.

Store our own trie, stored in files, and that gets used to do rapid walking.

Speed things up a lot by just tracing the first level of directory, so it already gives us a better walking path.