
>[!tip] Created: [2024-08-10 Sat 11:13]

>[!question] Targets: 

>[!danger] Depends: 

get given a api object for reading files that is scoped to a particular branch, commit, and path.

SelectionIds are passed down - selections are set by the jitter.
If the user removes a selection adornment, then these props will change.
may pass in the current prompt to the jitter, so it can choose to do something about it.
May wish to be gracious with the prompt.
mic can be requested, which might be simultaneously used by the prompt.  Prolly just start transcription.

3 hooks back:
- add to selection
- createFile( path, data )  // can be used to create files or modify them
- updateFile( path, data )
- deleteFile( path, data )
- add to prompt
- submit with prompt

From this, you could do any inter action with the platform ?

If the prompt adornments are deleted, then the jitter needs to respond.
If the jitter set some selections and they got removed by the user, the jitter must respond.
If the jitter modified a file and is passing that to the prompt for submission then the user deletes that modification, the jitter must respond, as the file would now be reverted to its pristine state.

## Routing pickups on a map
scoped to the object schema and the object itself
As the json object is modified, the changed version is set

## editing a file
scoped to the exact file

## comparing versions of a file
scoped to the exact file and all prior versions
Can read from the api the commit of the file, and the exact file, and can walk back to prior versions.

## List all customers in a table
Scoped to `./customers/*` we would read in the directory using an async iterator that caches the hashes of objects.
We would watch for changes to the directory.
