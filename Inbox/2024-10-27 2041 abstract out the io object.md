
>[!tip] Created: [2024-10-27 Sun 20:41]

>[!question] Targets: 

>[!danger] Depends: 

This should be actually totally independent of anything that controls it or runs it.

The addressing scheme should be pluggable too, which might make it very easy to test with.

This unit should simply deal with:

1. Here is a pool of actions from various locations, here is the current io file, produce the next io file
2. Here is an io file, execute the next action
3. Here is the result of an execution, add it to the io file


Addressing schemas would attach themselves to the actions with an identifier.  This should be independent of everything else, since it doesn't matter, it only matters what the addressing system provides back to various parts within the system.