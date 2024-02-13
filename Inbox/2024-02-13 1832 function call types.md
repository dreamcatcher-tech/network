
>[!tip] Created: [2024-02-13 Tue 18:32]

>[!question] Targets: 

>[!danger] Depends: 

Pure functions that you call like any other function.  Runs in an isolated compartment, but does not interact with the IO system unless it is given permission to do so.

Serial are functions that interact with the IO system, and execute in the order they are added to the io file

Parallel are functions that begin execution immediately, on a separate thread.