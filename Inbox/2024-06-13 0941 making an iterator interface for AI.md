
>[!tip] Created: [2024-06-13 Thu 09:41]

>[!question] Targets: 

>[!danger] Depends: 

pagination and iterating over large lists

Make it so that under the hood it can be done in parallel 

Can be a reader or a writer, as in a map reduce model.

The end result gets squash merged into the main branch, with a reference to the transient working branch where all the activity occurred on.
It doesn't seem to matter to record all these intermediary steps, so long as the replay gave the same result ?  Else we carry large amounts of data in history that was only relevant for about 30 seconds.
Also replay then has to follow exactly how the working was done, rather than just doing it as fast as it possibly can, potentially with sampling.

specify chunks that it can advance forwards at a time, like 50 pieces.

Allow parallelism if it was used to do processing, and allow a base node adjust it while its running to dial up and down the number of workers and the ranges they are to work on.

config like breadth first or depth first, if it is a recursive walker, like what would be used on a directory structure.

The walker could be configured with different filters which the bot could have specified in NL as the call parameters.  these can be glob patterns, but they could be a little piece of code that got generated and tested by the bot before running it.

We could graphically show how the iterator was going, and allow people to work with the bot to write little pieces of code that do what they wanted without us getting invovled.

At least request it from the marketplace.

The code could also be little loops of NL logic, where they tested it in a workbench themselves.  This is them programming.
AI generates test queries against it to flesh out edge cases and ask them for input on those.
Basically walking thru thru step by step all that is required to specify a program, and then once it has a solid spec, just executing the NL directly.
Or, generate NL rules from the requirements, and run those.

So the AI is the command interpreter too in this case.