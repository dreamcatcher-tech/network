
>[!tip] Created: [2024-08-23 Fri 11:58]

>[!question] Targets: 

>[!danger] Depends: 

If we use io.json, then all the file data goes thru the action system, which is painful and large.

To do this on a remote chain, it should use a file, and when it gets deployed, 

ls for a large directory needs to pass back the hash of the tree object, and that gets read in by the recipient.

Especially if each tool occurs in a branch, this is a lot of wasted writing.
Read and write need only be repeatable in the accumulator.

Could add compression for actions when putting them in the queue.