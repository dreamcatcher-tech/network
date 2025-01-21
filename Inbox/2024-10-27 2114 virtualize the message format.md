
>[!tip] Created: [2024-10-27 Sun 21:14]

>[!question] Targets: 

>[!danger] Depends: 

and the io.json format.

This should be indepednent of the on disk format, and allows any kind of message to be used.

Formats are in versioned jsr packages, and we pull in all versions whenever we need a new one published.

Then to read any given version off disk, we use the schema.