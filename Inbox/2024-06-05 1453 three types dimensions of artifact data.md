
>[!tip] Created: [2024-06-05 Wed 14:53]

>[!question] Targets: 

>[!danger] Depends: 

File tree path
Process branch path
Commit id - history in time

Three places to use the api from:
1. Inside an isolate operating on its own branch files
2. Outside artifact from an app, operating on any files
3. across branches

So having a standard way to do operations on files, branches, and commits, from all positions, is needed.

We need to standardize the interface, and make sure that all ops are the same pattern.
read, write, ls.

They should also be very commit efficient too.

Branch tests should be the same as file paths, in that exists and ls should be the same.  