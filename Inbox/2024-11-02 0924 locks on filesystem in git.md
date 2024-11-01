
>[!tip] Created: [2024-11-02 Sat 09:24]

>[!question] Targets: 

>[!danger] Depends: 

If we make all threads work on the same set of files, how can we ensure a lock on files ?

We could read the files and then when we write them, guarantee they are the same hash still ?

Or write something that gives us global lock on the area, so that nobody else can change it ?

Or just make sure we handle conflicts ?

Or name in such a way as we guarantee no collisions, like using state.

? how can we read state across threads ?  or update it ?

It would need to be a loop ?  

Reading state seems easy, but writing it seems to require a local function.  We could send a mutate state action, using some simple rules, like a counter update, where those functions are always available locally.