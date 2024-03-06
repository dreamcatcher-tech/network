
>[!tip] Created: [2024-03-05 Tue 12:45]

>[!question] Targets: 

>[!danger] Depends: 

If a parent spawns a new branch, then when it gets its reply back, that is the moment it deletes the child branch.

This will need to be channeled thru a specific management piece, so that the kv store can be kept consistent.

Branch being deleted means no more actions can be sent in, and it is an error to do so.

Really need a reasoning tool to keep track of all these things, and to help determine the specs of the whole system, in NL.  We should be able to develop simple test scenarios in NL for this.  May even be able to generate functions to do this.  The functions should know about git and how to fork a safe version to start.

Want to trawl the code for TODO statements, and include those in the reasoning.