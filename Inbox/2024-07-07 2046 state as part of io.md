
>[!tip] Created: [2024-07-07 Sun 20:46]

>[!question] Targets: 

>[!danger] Depends: 

Makes sense to put this in io, then it is always synchronous as it needs no checks, it is automatically deleted when branching occurs, it gets written to a .json file that always changes anyway.

This is hard since has to be async in order to recover previous state.

Might update files and require the order version, to ensure nothing modified it since it was read ?