
>[!tip] Created: [2024-06-13 Thu 09:41]

>[!question] Targets: 

>[!danger] Depends: 

pagination and iterating over large lists

Make it so that under the hood it can be done in parallel 

Can be a reader or a writer, as in a map reduce model.

The end result gets squash merged into the main branch, with a reference to the transient working branch where all the activity occurred on.
It doesn't seem to matter to record all these intermediary steps, so long as the replay gave the same result ?  Else we carry large amounts of data in history that was only relevant for about 30 seconds.
Also replay then has to follow exactly how the working was done, rather than just doing it as fast as it possibly can, potentially with sampling.