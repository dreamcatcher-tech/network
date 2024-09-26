
>[!tip] Created: [2024-09-27 Fri 10:29]

>[!question] Targets: 

>[!danger] Depends: 

Browsing versions is hard work, so would be ideal if we could look up the last changed directly.  Pijul does this directly, but we might be able to do something similar in git ?  If each object had some extra bytes in the front that was the commit where it last changed, then it could be walked directly.  Normal operations would ignore this, but when walking we would use this.

Another way is to store indexes in the db about it, so for each commit, we also store a list of files that were changed, so we can walk rapidly in the db.  Bad because the overhead is high.

Compromise is to store a commit item in the db with an incrementing counter, so that we can very rapidly retrieve all the commits in a branch, using a range call to the db, then grab the commits as a batch.  This will be massively faster, and doesn't cost too much overhead.

Be super helpful if the commits stored the last commit that the changed files were changed in.  This could be a single extra file in the root of the repo that we automatically update with changes, so we can get top level tree changes.

So to walk a file that is nested, we can get the commit where the directory last changed, and then walk into that to see if the file changed, then keep walking back at the top level until we find what changed.  This should be significantly faster than the commits directly.
BUT doesn't help if nested.