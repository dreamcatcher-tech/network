
>[!tip] Created: [2024-12-10 Tue 10:13]

>[!question] Targets: 

>[!danger] Depends: 

using structured outputs to get a json object, where the code is actually a json string, and a filename.

Multipart edits can also be described when we want to do partial updates.

We would then apply the edit and check back with the model to see if it looked right.

In this way, there can be no confusion about the file boundaries, and the filenames.

So a concat tool, when given multiple file paths, will smoosh them all into a json object.

If we only wanted edits, then we can force the output to look similar.
We can also use predicted outputs.

Make a concat and a splat tool that can just copy paste the output of the model back to disk, and then apply edits to multiple files.