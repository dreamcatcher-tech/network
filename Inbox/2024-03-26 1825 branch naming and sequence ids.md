
>[!tip] Created: [2024-03-26 Tue 18:25]

>[!question] Targets: 

>[!danger] Depends: 

Each action on the system requires at least one commit, since everything ultimately gets executed in serial.

Branch names in git can have a '/' char, so we do not need to do any joining dances.
Just ensure that the kv path segments never have a '/' in them.

The unique atomic id of each activity is given by its sequence number.  Pierce uses a server side ulid.

So if the branch names are always suffixed with the sequence number, then they can be renamed to anything, but we can always be assured we can access them quickly ?
The name could be stored in the io file, passed with the origin action ?

Lock for branches can be just a file ending in '.lock' and we forbid branch names that are named that.  Unless the lock file is always empty, and the tip file always has a sha hash.

lock branch, and then global lock on the sequence you are about to process.

