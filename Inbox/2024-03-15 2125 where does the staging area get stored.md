
>[!tip] Created: [2024-03-15 Fri 21:25]

>[!question] Targets: 

>[!danger] Depends: 

The true staging area is only for the head.
We should not be able to write to anything but the head, however we should be able to read from specific commits.

In the api, we should be able to get things arbitrarily back.

Never any reason to pass an altered fs around - the things that need access to the altered fs are always in the same memory space as each other.

rm should use the index for now ?
only if commit is undefined should we be using the head commit.