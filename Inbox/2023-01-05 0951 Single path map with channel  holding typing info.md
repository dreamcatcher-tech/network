
>[!tip] Created: [2023-01-05 Thu 09:51]

>[!question] Targets: 

>[!danger] Depends: 

Currently multiple HAMTs are maintained for each of the different path types.
Each one needs to check all the others to ensure no name collisions.
All the contents of each HAMT are stored in the Channel for reverse lookup purposes.

This extra programming and machine effort can be removed if a single map is used for all paths.
Distinction as to what type of channel the path represents can be looked up from the channel info.
This gives name collision protection for free, reduces class count, loses no functionality, and increases speed to resolution of what type a particular path is.