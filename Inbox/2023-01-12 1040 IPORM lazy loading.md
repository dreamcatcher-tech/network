
>[!tip] Created: [2023-01-12 Thu 10:40]

>[!question] Targets:  

>[!danger] Depends: 

Sometimes we do not need all of an object, so no need to load it up and check all the logic.
We could allow loading just the path into the object.
The assertions that check the logic of the object as a whole would need to mark that these subpaths are not required for logic checking, or to specify some relationship so we can load the smallest amount of data and know that we are consistent.

For reading we should enable this by default, but for writing we will need to pay attention to the consistency requirements of the application.  If the user did not go to the trouble of specifying consistency boundaries then we just assume the entire object needs to load if they supplied us with any kind of logic checking.