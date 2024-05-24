
>[!tip] Created: [2024-05-24 Fri 15:30]

>[!question] Targets: 

>[!danger] Depends: 

If all the keys had a version number at the front, then we could upgrade the db and have the results be instant.
Set the flag in the db, and have every isolate read it by way of starting a watcher when they begin.
As soon as the isolate detects a change, it should bail and refuse to process anything else.
Can do the same for deployment ids ?  If an isolate starts and sees it isn't listed in the isolates list, then it makes a new entry, since it is now the newest one.

Just not sure how the isolate reload works in deno - if it was atomic, things would be fine ?
We should make a way to know if it wasn't atomic, rather than trying to make a way to force it to be atomic.  Without testing, we wouldn't even know if our way was atomic anyway.

Be great to use the same logic to:
- lock a pid for side effects
- lock a repo for operations like pack, push, pull
- lock the whole deployment so we can upgrade / deploy cleanly

ALso need a way to run between layers live, so upgrade can be done in the background, then flick over once ready.

Are we immune from corruption by way of git under the hood ?

Versions of the git file protocol should be handled differently to the artifact code runners.
Upgrading how the .io.json stuff works seems a totally separate issue.