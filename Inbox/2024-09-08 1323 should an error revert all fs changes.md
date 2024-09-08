
>[!tip] Created: [2024-09-08 Sun 13:23]

>[!question] Targets: 

>[!danger] Depends: 

Currently if write to some files in an isolate and then throw an error, the files are still written to.

This seems like the behaviour the posix filesystem has too, so shouldn't be a problem.