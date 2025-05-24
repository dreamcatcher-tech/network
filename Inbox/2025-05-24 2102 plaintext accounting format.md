
>[!tip] Created: [2025-05-24 Sat 21:02]

>[!question] Targets: 

>[!danger] Depends: 

it should be one object per transaction, to keep the hash based model clean.
These should have filenames that are sortable and indicate order.

they might not all present in the same directory, since we could delete them each commit and build them up by walking history.

plaintext accounting at scale would need a different approach, since an unlimited size ledge would require some sharding to occur.  If the file format was the same perhaps, but it was stored in a sharded way ?

looping over the records should be done by parallel ai bots to get any kind of result you want ?

how close is this to just defining a spreadsheet that is ai friendly ?

simple format is a counter, and just delete whatever is there and add the new entries in order.

that could allow for rewriting of history, as we would just commit another version of some already used index number.  The rule is then that we keep the latest version of an entry, and show the others as versioned history.  Each rewrite would hold some metadata about the commit they were updating.

it binds the git versioning into the file format more than keeping the two systems unaware of each other.  So you can export out to a single ledger file that is text based, but it requires a simple script to run.  This is what would run every time any op was run.

It seems prudent to keep format compatibility with some other system, rather than just our own thing.