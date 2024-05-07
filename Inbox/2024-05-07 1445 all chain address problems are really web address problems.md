
>[!tip] Created: [2024-05-07 Tue 14:45]

>[!question] Targets: 

>[!danger] Depends: 

So the error codes used in the web probably apply to all our issues around moving chains and deleting chains.

When something has been moved, you should be able to receive a redirect, which the sender may or may not choose to follow.

Simplest version is to just reject the message as undeliverable.

So when moving, we should be able to do a system action that marks the chain as unavailable and processes the last of its actions so that the pool is drained and is blocked from being filled any more as a move is imminent.