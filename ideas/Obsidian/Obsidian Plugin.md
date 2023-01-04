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

## Syncing with other data sources
Interpulse can act like a service bus, pushing and pulling between multiple other services.
It seems better to go thru Interpulse since it provides audit history, security, and interaction with other services rather than being obsidian centric.

### Github
Pull in your issues into obsidian by pulling into chains then writing the latest of the chain into the .md file that obsidian works off.
This would model edits too.

Make a change in the .md file to trigger a chain update which then pushes to github under your linked account.

Store git repos on chain, link to them in obsidian so you can instantly browse repos that are hosted in any platform in the same way.  More of a user base wants to use a range of methods to access these multiple hosts so the chance of quality and adaptivity is far higher.  Some of these purposes pay better than just obsidian alone, so can finance this work.

### Chatting live in Obsidian
If the chats are treated like files, and merges are automatic, then we can provide standalone chat in obsidian.  This would be done using on chain chat servers, and in obsidian we just provide an interface for reading, writing, and merging info.

If backed by git, we can use git diffs as the means of expressing the chat history, to allow chats to also be stored in git as well as on chain with the same hashed content being stored in chains and in git, for efficiency and grace.

Can connect slack or discord or any other chat service to every other chat service in this way.

Opening a chat 'server' is opening a folder, then channels are files, groups of channels are folders of channel files.  Links in the chats to the obsidian graph and mapped specially so that other users have the same access.