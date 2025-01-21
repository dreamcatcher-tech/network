
>[!tip] Created: [2024-11-14 Thu 18:19]

>[!question] Targets: 

>[!danger] Depends: 

It should possibly be fully an action interface, from the start.

Then to call the tip function, we call using action creators.

So local tip takes a narrowed form of action that would otherwise be addressed off chain.

Making it be the same as the api interface helps a little bit, but then we have a conversion problem between the two.  Being the same means it could be passed in as part of the api for testing, rather than relying on the action translation system ?

Receive is easy, but transmit is hard.

trail should have always the special channel buffer side thing.
give it an index number, which gets recovered from the temp thing.

So inflating also means going thru all the outcomes, retrieving the inflation id, and ensuring that these ids are inflated and present.

Then when the inflator gets written to, it has ids that the receive side uses to retrieve the files.

? can this be used to send snapshots around the place ?


When doing remote writes, the binary data is written to a git object in the local repo, then the hash is transferred, then re-read as a local object on the far side.  Might be transferring a temporary file system, or just files named in the dedicated network branch.