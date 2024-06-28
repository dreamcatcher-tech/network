
>[!tip] Created: [2024-06-28 Fri 13:55]

>[!question] Targets: 

>[!danger] Depends: 

The session file should be named with the same name as the session branch itself.

This allows us to have a session where the files in question are in fact session files, and this stops the bot getting confused.

Or we could chroot the file tree to never let the bot see the files that are making it work.

Once a session is completed, it should be merged up to the parent branch when it closes.

We should store everything about the branch in the single file, under different keys - multiple files is bad.

Store it in the .sessions folder, so it does not polute.

https://github.com/dreamcatcher-tech/artifact/issues/181

undo last N entries should be a permitted operation.
