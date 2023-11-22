
>[!tip] Created: [2023-11-21 Tue 10:08]

>[!question] Targets: 

>[!danger] Depends: 

Auto update assistants that are built in the playground so SM can see what they do.  Update them with files and with APIs

Name them by their paths in the complex.

Each chain represents an assistant.  The API represents the assistant function calls available.

Files should be browseable in HAL, and the direct file rendered in the stateboard, and edited.
Outgoing links to it can be deduced, so we know what assistants we will be updating with a change.

Each thread should be browseable as a chain.

Higher calling function would be reponsible for triggering their functions, so each assistant only needs to handle their own functions.

Take the API version as canon, and warn if the code version differs, to allow SM to edit bots in the playground and have the changes show up in HAL.

Boot up and see if we have a thread already, if so load it up, if not create a new one and seed it.

Allow edit on chain, with upload to the playground
Edit the bot on chain and push it up to the assistants in platform.openai.com

## v1
name the assistants by the path in the tree.
Can sync with a fixed command, otherwise accept the playground as definitive.
Sync the functions with the playground always ?

Store the whole thread in state, so we can clobber sync
Make threads browsable as members in the filesystem.