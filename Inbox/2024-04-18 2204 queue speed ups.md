
>[!tip] Created: [2024-04-18 Thu 22:04]

>[!question] Targets: 

>[!danger] Depends: 

Make the atomics for pool counting retry the atomic with a modified pool count each time - basically cache all the heavy stuff, and make sure the atomic only occurs with the update of the pool counter being changed, so all the other stuff isn't recalculated.

Learning about the queue height would be useful to know, since we may never be able to go faster if queue height stays high rather than messages being delivered.

Replies may come with the full io file, to save a db read ?

kvtoolbox can be read manually, concurrently ?

Add a delay to the local db writes, so we can see if tuning anything our side will make cloudside improvements.

