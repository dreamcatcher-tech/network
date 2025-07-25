
>[!tip] Created: [2025-07-26 Sat 10:20]

>[!question] Targets: 

>[!danger] Depends: 

if the git style operations were granted, then selecting something just becomes an id storing thing ?
or we can actually build up a transclude using a collection of these strings, which on server side, these will be inflacted and inserted using concat or similar.

how to get to stucks generation and filing ?

require the file to be specified by a commit and a path - basically a scope.

do some custom ui to indicate these files by id, resolve them, and store them locally in the browser ?
use the browser to convert them in to concat.

tool calls that include files would need some ui to interpret them nicely for the user.
for now we can let them click on it, and it will open an artifact that can do the resolving of the files.
so click on it, and it will open the transclude viewer for attachements.

files should be handled serverside since they might be massive, and it shouldn't have to go thru the browser to be selected.  The tool might take in the files by ref or by value.