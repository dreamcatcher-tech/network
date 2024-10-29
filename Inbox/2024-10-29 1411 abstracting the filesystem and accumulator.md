
>[!tip] Created: [2024-10-29 Tue 14:11]

>[!question] Targets: 

>[!danger] Depends: 

Each time there is an await, this is a chance for the filesystem to have changed.

Or is it ? what if we stopped the fs from changing during waiting ? Would save issues where we read something in, then it changed, then we didn't reread it back in ?

No, fs needs to shift forwards, in case it was us who dispatched an action out.

