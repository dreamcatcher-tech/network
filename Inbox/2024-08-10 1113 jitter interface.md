
>[!tip] Created: [2024-08-10 Sat 11:13]

>[!question] Targets: 

>[!danger] Depends: 

get given a api object for reading files that is scoped to a particular branch, commit, and path.

3 hooks back:
- add to selection
- add to prompt
- submit with prompt

From this, you could do any inter action with the platform ?

## List all customers in a table
Scoped to `./customers/*` we would read in the directory using an async iterator that caches the hashes of objects.
We would watch for changes to the directory.
