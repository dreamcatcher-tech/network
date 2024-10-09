
>[!tip] Created: [2024-10-10 Thu 09:49]

>[!question] Targets: 

>[!danger] Depends: 

if we read in the users nfts, and then store them in github, we could only store them for a specific block.

there needs to be a refresh function, which costs money so we need to be sparing in how it is called.

Maybe best to use the existing apis to read the chain data in the front end only, rather than us maintaining a copy using git where we link to the blocks.

We could handle these blocks and do our own processing to update a git filesystem representation of the chain, so we can query it natively.

Want to read the nft list and make this part of the public profile of the persons page.