
>[!tip] Created: [2024-11-12 Tue 11:57]

>[!question] Targets: 

>[!danger] Depends: 

If a compartment execution causes some async actions to fire that call the same isolate, is there ever any reason to use the same compartment, to avoid overheads of setting up the compartment ?

To allow for multi threading, we should require isolation, so we can execute multiple calls in parallel.

If there were reads and writes, we could pause until these could be ordered, but if no such calls, then get the gains of parallel execution.