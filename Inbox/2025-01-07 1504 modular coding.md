
>[!tip] Created: [2025-01-07 Tue 15:04]

>[!question] Targets: 

>[!danger] Depends: 

break apart the functionality of files and relate them using interfaces.

then focus on a single file at a time.

The xml parsing should be separate from the server polling.
Then it can be focused on with no drift.

We really want to be able to just give it an interface, some checks, and then have it loop until it has met the requirements, or it has triggered an exception indicating that these requirements cannot be met.
