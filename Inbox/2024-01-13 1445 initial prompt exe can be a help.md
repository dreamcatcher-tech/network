
>[!tip] Created: [2024-01-13 Sat 14:45]

>[!question] Targets: 

>[!danger] Depends: 

If helps are a standard format that we know how to execute, then the initial prompt / goalie, can be set up as just another help.  It just so happens that it is selected by default rather than by retrieval.

This means there is only really one execution process for the whole system.

In an ai native system means that all the prompting and responses is all state, and the core plumbing just marshalls text files around, with the odd function call being made.

So the theory is that any NL system at all can be composed using these tools, where the plumbing is also handled by NL, but has some core IO based structure.

Are helps then an NL module format for NL codebases, where they can be imported and executed just like existing modules ?

The initial prompt would be a hardcoded call to a given help, using the help runner.

So we would load up the goalie help manually, without doing any retrieval, based on what the io channel was set to.  Then as it received user prompts, it would execute the runner, which would call on the stuck function and call in other helps.

These would run inside their own runner instance, but the help runner, being nested, is still the same piece of code running over and over.

Calling a help with no prompt simply makes it execute, else it would be given text that acts as the user input to the function.