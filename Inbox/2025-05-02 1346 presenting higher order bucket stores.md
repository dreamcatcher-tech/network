
>[!tip] Created: [2025-05-02 Fri 13:46]

>[!question] Targets: 

>[!danger] Depends: 

We might be able to use an executable that turns a part of the hard disk into a blob store. Then, using Artifact running locally, it could coordinate with other computers to provide a redundant blob store that other applications could run on top of, including providing a live running backup for its own individual data. It would be the right master of its own data and it would use other machines as a backup. Together they would present a unified resource to others that had quorum-like effects and redundancy with configurable behaviors in the case of net split where they could fork and merge back in together. They could also present computation resource on top of this shared blob storage. 

A single machine can only present a very simple consistency view which is based on its operating system. Using the network, we can use these models to reach quorum quite easily as well. And we might use NATS to coordinate messages between them all. Or we might make our own protocol that was gossipy rather than strict and coherent. 