
>[!tip] Created: [2024-07-24 Wed 11:32]

>[!question] Targets: 

>[!danger] Depends: 

Git means access to github.
If we moved to pijul, then we need to be able to translate back and forth.

We could generate a git commit on demand in pijul.
How the head format is chosen should cover how translation works.

If we generated a git commit and then left a marker in pijul that this action happened, we can use the previous time this happened as the parent commit.
We could technically track with git 1 for 1, so each pijul commit causes a git commit to be generated ?  At least this is just computation, and not storage.

Basically we should be able to generate the git commit and then throw it away, so it never needs to be stored.

