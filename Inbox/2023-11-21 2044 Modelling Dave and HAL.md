
>[!tip] Created: [2023-11-21 Tue 20:44]

>[!question] Targets: 

>[!danger] Depends: 

Root is Dave.

Root talks to `/.HAL/` which is infact a thread object that talks to the assistant at `/` - this is the only exception in the tree.  The thread causes the assistant to be loaded to execute on the thread.
Whenever an assistant needs to talk to another assistant, the thread object spawns a new thread that points to the relative path that is being spoken to.  Thread objects represent the assistant in the filesystem relative to the assistant that is speaking to it.

This is an AINode, which includes a thread and a means to run the assistant coded at a filesystem path to continue the thread.

HAL then creates thread objects that are named by the paths of the filesystem objects they talk to.
Assistants are created and synced with the filesystem itself, since you are genuinely chatting with the filesystem.  They are executed by reading the filesystem only, and make no changes to it.
This info is stored in an extra object on each file, which is its AI slice, which contains configuration information about how to AI the node.

