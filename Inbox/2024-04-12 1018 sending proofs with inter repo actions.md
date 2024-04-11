
>[!tip] Created: [2024-04-12 Fri 10:18]

>[!question] Targets: 

>[!danger] Depends: 

If we receive an action from a branch, we need to be able to verify it as having come from where it said it did.  If it carrie

We could wrap in envelopes like pierce will be, which contains proof and signature information.

All solidrequests should therefore include the commit that created them ?

Always send the commit with the request, same as with a mergereply.

No needed but required later - enveloping or using a network branch were all the comms for a specific branch go, which allows input too.  So

This is where pijul would be very useful, since the merges would be cleaner, as it doesn't matter what order the patches were applied in.

Might be an extra annotation on the solidrequest object with some proofs to make it independent, or better yet to send a commit with some provenance, so that files can be sent too.

BUT a merge reply is for something in the same repo - across repos, this might be a vastly different story.

internal reply, merge reply for across branches, external reply for merge across repos.