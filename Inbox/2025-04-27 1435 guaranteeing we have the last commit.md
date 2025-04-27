
>[!tip] Created: [2025-04-27 Sun 14:35]

>[!question] Targets: 

>[!danger] Depends: 

Once we have pulled down a commit fully, we need to store the whole thing.

We could store it in a pack file ?

or we could store each object in the web cache.

web cache with promises and concurency so that it doesn't break the cpu.

So long as the timing works for completing the caching.

Then we store the latest commit we have in the localStorage.
Trouble is that the cache can get dumped at any time, so what is in localStorage may differ from what we think we have.

Using OPFS, if we just wrote the blob objects down, this is the safest way.
Then mark what the latest commit we have for a given branch.

This would mean our load time for the next page load would be very quick.

OPFS is shared between pages, so any page would see the same thing.
Perhaps a leader should be nominated to write to the disk, so that two pages don't attempt to overwrite each other ?

writing the msgpack messages straight to disk would be idea ? less processing.
could pass back the msgpack item attached as a symbol to the object we parsed in ?
or we can allow the msgpack stream to be tapped ?