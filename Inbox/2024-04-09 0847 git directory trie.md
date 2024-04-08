
>[!tip] Created: [2024-04-09 Tue 08:47]

>[!question] Targets: 

>[!danger] Depends: 

Using what we learned about tries in ipfs, we could maybe make some modifications to git to make tries in this way ?
There must have been proposals in the git community to make large directories handle like this.

We could do it internally, but we would need to translate out any time we were committing something.

Maybe whenever we do a pack operation, we could convert to these compatible versions ?

Delta pack for git should use these tries anyway.