
>[!tip] Created: [2023-02-13 Mon 21:13]

>[!question] Targets: 

>[!danger] Depends: 

Store a flag in config that says calculation is ongoing.
Let other chains read the state, and if they see this flag, then they can send an action that resolves when the current calculation is completed.
Progress can be set with blockbuster - total and progress.
Then this gives a standard way of giving updates on a task.

Both progress and total can change between blocks, and go up and down.

Can be unset to be indeterminate.

Allows for a more graceful way to do long running operations, where a client UI can be receiving the blocks in between the blockbusting actions, and then can report feedback to the client.

Multiple blockbuster events can be happening at once, each one has an ID with it.  The requester of the action might supply an ID with their request so that they know which one they triggered.

If a reader sees multiple processes in progress, they can do a summation or wait for a specific one.