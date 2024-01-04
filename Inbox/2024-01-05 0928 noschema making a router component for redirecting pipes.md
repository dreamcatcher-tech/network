
>[!tip] Created: [2024-01-05 Fri 09:28]

>[!question] Targets: 

>[!danger] Depends: 

Key is that the instructions should be readable by both LLM and by machine.
So by changing the contents of the file, we can redirect the flow of data from conventional code.

## Eg: redirecting where the user prompt goes
have a file named `.pipe` in the root of HAL, which says where the in coming user prompt goes, what format it should be in, and what is the location of the code that we should execute.

Having the code stored in git is natural for loading it up in a web worker.  So we would never actually evaluate the code ourselves, but rather would use a worker.  This gives us perfect isolation control, light weight, 

So a function definition for an ai powered item would be:
1. the LLM id
2. the path to the code that will get called to make the call

Should it be that one process can write to a file per commit, so that there is no uncertainty as to which process did what ?
If each one is a user, then the merges would be conflict management, so there can be parallel writes going on, but there will have to be a merge.
Or we could use a lock on the file / git repo, and make sure you have to wait until the next commit before you can access the system ?

Git is the perfect model for all threading, be it humans of machines.