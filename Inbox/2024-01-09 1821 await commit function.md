
>[!tip] Created: [2024-01-09 Tue 18:21]

>[!question] Targets: 

>[!danger] Depends: 

Inside an isolate function, this would cause a commit of the IO channels for this thing.
Would wait until globally a commit was ready, so might make you slower, but would make recovery easy if a large computation has been done.

Like using a checkpoint for the system, which will make it continue on from where it got up to instantly, with pre-resolved promises.