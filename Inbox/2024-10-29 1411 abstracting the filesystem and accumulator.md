
>[!tip] Created: [2024-10-29 Tue 14:11]

>[!question] Targets: 

>[!danger] Depends: 

Each time there is an await, this is a chance for the filesystem to have changed.

Or is it ? what if we stopped the fs from changing during waiting ? Would save issues where we read something in, then it changed, then we didn't reread it back in ?

No, fs needs to shift forwards, in case it was us who dispatched an action out.

So whenever executing, we need to be able to resolve a range of already executing functions.

Need to resolve promises late once they are running, allowing the reuse of the function cache.

Should be much easier if we have abstracted it out.

Parameters and Returns can be keys in actions that determine if they are a reply or not.