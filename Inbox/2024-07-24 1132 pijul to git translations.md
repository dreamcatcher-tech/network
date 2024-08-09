
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

If we maintained a top level git commit, like the index, but we never actually store it, unless explicitly told.  When told, it goes into github.

The git structure itself could be stored as patches too, rather than the full file, so it can recover the file by walking the patches and checking the hash is correct.

So use the git structure as the index of the repo to allow rapid retrieval of anything, then use patches in reverse to walk backwards.  The git commit is transient and not stored anywhere permanent.

Then retrieval from patches just walks back to the most recent git commit, and then rebuilds at that point, since it has the git hash to start from.

Use the deno cache to store git structure, but commit pijul to db since always space efficient.

?? how would we grab just the git repo and then start making more patches that were compatible ?
Git would need to be like a snapshot where all the patches reset to point to the previous git commit.
Needed to maintain compatibility.

Pijul should be able to map 1:1 to git, if the notion of a commit is introduced to pijul.
Each patch that shows up in a commit is just the changes that would have happened to that file in git.  We can compute what the git hash would have been, as well as have what the pijul patch was.

A commit can be a top level directory wrapper around pijul, and so any changes to the directory are in essence a commit.
Can make metadata file that is the commit info that is stored in git.
