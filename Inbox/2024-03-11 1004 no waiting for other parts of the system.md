
>[!tip] Created: [2024-03-11 Mon 10:04]

>[!question] Targets: 

>[!danger] Depends: 

The rule is not to wait for the reply from processing a request ever.

Watching for replies is needed only for piercings, which is part of the clients view into the system.

The act of doing a commit will pick up where the last thing left off.

Waiting is a non recoverable state, which means it isn't repeatable.

Relyon gin it generates additional repeatability complexity / recovery complexity.

Repeatability and recovery are separate things.

Locks can be waited for, but this is not actually waiting to continue on with calculation, it is waiting to start calculation, and is a totally recoverable state to be in.