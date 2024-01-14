
>[!tip] Created: [2024-01-14 Sun 20:07]

>[!question] Targets: 

>[!danger] Depends: 

Each commit that a validator wants to put forwards would get tagged and then signed.  The tag should contain the consensus round info.

The pubkeys of all validators are stored in a file in the repo, so the tag should be tiny if it is a BLS signature that combines everyone else signature.

Each tag computation is signed by its publisher, so we know who introduced which messages into the system.  Ultimately the result is a git tag with a consensus height and enough signatures to form quorum.

Any kind of consensus can be used for this.  The tags can be published on github.  The contents of the tag can be the BLS signatures and the publisher can be the gpg key of the node, just so it slots in with gits formats.
