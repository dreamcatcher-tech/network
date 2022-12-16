>[!tip] Created: [2022-09-28 Wed 11:32]

>[!question] Targets: [[Obsidian as first Dreamcatcher]]

>[!danger] Depends: 

Using Obsidian as the base, we could make a plugin for their system which can let people interact directly with the dreamcatcher.

Markdown documents could be used with additional syntax to access functionality native to Dreamcatcher, such as markets, funding balances, and other live informaiton.

Problems are that Obsidian is made for .md files, and so a filesystem that is entirely virtual, with no files on disk, might not be possible.

Virtual overlay shows the dreamcatcher status.  ChainId, approot, pulseheight, latest hash, value attached, link to browser to see it in blockchain land directly, viewcount.  Shows as a badge.  Can embed the info directly in the file, alongside the file, in a summary file in the dir, or in a summary file in the root dir.  

If git repo, use the same hashing as the object in the git repo.
Store the config in a file in the root, like `.dreamcatcher` or similar, to have the approot chainId and some bootstrap nodes.

Generate a QR url in each page so if you print it, people are taken to the blockchain version.