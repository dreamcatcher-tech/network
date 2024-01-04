
>[!tip] Created: [2024-01-05 Fri 11:54]

>[!question] Targets: 

>[!danger] Depends: 

We could use our own signatures, but the pgp method should be sufficient.

We can then accumulate all the other signatures seen or simply merge the remote branches in, with their signatures, so we all have a unified view of what master is.

We might have to store these commits in a file, and it might need to be a separate repo to the content repo, since we are all agreeing on the hash of the content repo, which we wouldn't want to change its hash with ours.  So once we have the consensus file, we would then merge this in to the content repo before we go and make the next signature file, so that everyone is signing on top of prior signs.

We could keep the signatures completely separate, and simply sign on the the previous agreed signature field, so the content still remains completely separate, which can be useful for rewriting history, where the signature history remains, but the content can remain maximally compact.

Also allows starting and including signatures at different points in the content stream of commits.
