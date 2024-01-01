
>[!tip] Created: [2024-01-01 Mon 12:35]

>[!question] Targets: 

>[!danger] Depends: 

If [[2023-12-29 1229 noschema databases|noschema]] is how the record structure needs to be, then what do we need a blockchain for, if we could just use git ?

Could use IPFS raw to handle replicaiton of records.  We would supply an ACL layer to block who can access which files.

If all the operations no longer need complex js code, and they ultimately get run by an LLM, perhaps LLM can be more native to the system ?  Perhaps it could be designed so simply that it is useless to drive without an LLM since it is just text files ?

Even complex code can be expressed with just state transitions, so we should split the library to provide this base layer, and then allow arbitrary extension, where one of those is LLM functions.
Split means it just uses the set state type operations, and the commit of git.  Then changes are submitted as patches.

So are we trying to simply provide git + ACL ?

Something still needs to decide what quorum means, but this could be an eth smart contract.

Git seems to be better performance, and we can join a maintained codebase.  In particular, if the contents of the system is text diffs, git will be faster.
We can also drop the payload layer, since it is just git binary.

There might at least some good design principles we can take from git.

LLM serverless.  Decentralized LLM.