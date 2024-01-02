
>[!tip] Created: [2024-01-01 Mon 12:35]

>[!question] Targets: 

>[!danger] Depends: 

If [[2023-12-29 1229 noschema databases|noschema]] is how the record structure needs to be, then what do we need a blockchain for, if we could just use git ?

Could use IPFS raw to handle replication of records.  We would supply an ACL layer to block who can access which files.

If all the operations no longer need complex js code, and they ultimately get run by an LLM, perhaps LLM can be more native to the system ?  Perhaps it could be designed so simply that it is useless to drive without an LLM since it is just text files ?

Even complex code can be expressed with just state transitions, so we should split the library to provide this base layer, and then allow arbitrary extension, where one of those is LLM functions.
Split means it just uses the set state type operations, and the commit of git.  Then changes are submitted as patches.

So are we trying to simply provide git + ACL ?

Something still needs to decide what quorum means, but this could be an eth smart contract.

Git seems to be better performance, and we can join a maintained codebase.  In particular, if the contents of the system is text diffs, git will be faster.
We can also drop the payload layer, since it is just git binary.

There might at least some good design principles we can take from git.

LLM serverless.  Decentralized LLM.

If the LLM does all the functions, then we don't need much operating system.
The LLM should be able to be stored as a binary large object attached to git too.

If we are to make an AI ruler, such as the attribution system, then it should be programmed in natural language so that anybody who can understand natural language can understand and audit how it works, rather than a special subset who can read computer code, and then even fewer who understand the domain specific constructs that are in use, and even fewer still who generate some simulated environments so the outputs can be discussed or disputed.  NL with LLM simulators is the way forward.

If it was git compatible, we could take backups to a private repo and restore from this too ?

There might be a git area and a chain area, where the chains are a superset of git.  For plain data we can use use git but for integrating complex logic where it is needed we would use artifact with objects.  These would be like wrapping logic up into the git records by adding some additional json state to them.  When viewed by git they would only show their 

The execution of the LLM itself is required to be in artifact for repeatability.

Artifact would make git be free floating - subject to consensus.

Could the plain language processes be used on chain to describe the operations and governance of the top level chain ?

such a [[2023-12-14 0954 the point of a GPU chain|gpu chain]] could end the struggle to get turing complete and formally verified public blockchain software running, where all we need to achieve is the public consensused execution of any given LLM on commodity hardware using staking to validate the results like a form of insurance.  It could also make blockchain accessible to many people, and end all the fuzz that is used to scam people.  Promising your own personal LLM running on blockchain, who wouldn't want to take part in such a system ?

These insurance pools can be used to guarantee speed of execution and reproducibility of the answer.

Such a chain would mean that all humans could readily understand smart contracts, and they would run a heck of a lot safer.  This seems a very raisable thing, too, and if we pair this with NFTs to produce individual components of the task, and keep them vibrant once we start running, this could be the path towards the end chain.

Rolling up from approots would be like submodules, and the commits could be used to

Because git is ipld compatible, then we would use ipld under the hood

All code is a file first, which then executes potentially other static files.

We'd make sort of an operating system that was entirely based on git with unlimited size and runnable in parallel with tens of thousands of processors available to each user.