
>[!tip] Created: [2024-11-07 Thu 13:07]

>[!question] Targets: 

>[!danger] Depends: 

There isn't anything stopping us from storing file data within the threads ?

Most things should be able to be stored within the state, but the full fs should be available too ?

If each folder for a thread contains:
1. the .io.json file that holds the info about the thread
2. the folders that contain the child files
3. a folder named .io.json which contains all the files presented to the thread

Means that we can store images, or other data in the process tree.