
>[!tip] Created: [2024-07-01 Mon 11:48]

>[!question] Targets: 

>[!danger] Depends: 

When changing things like io.json or session file formats, we can set the versions that we know of, and have transforms that get us to the next version.  

Then, read the current version, run thru the transforms until got to the latest version.
Do all the transforms in ram until the highest version, then write it out to disk.
Can be done only in the read step, so it only writes the transformed version on the next commit.

Downgrades are possible, but need explicit code.

Changing branch structures would need a similar type of transform function.

Test the transforms on a large number of example versions, and ensure they upgrade correctly.