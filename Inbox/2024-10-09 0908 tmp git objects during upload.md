
>[!tip] Created: [2024-10-09 Wed 09:08]

>[!question] Targets: 

>[!danger] Depends: 

To upload large files, we should allow an object to be uploaded that will be intentionally tagged as transient, as in it will be deleted at an expiry time.

If you have access to the repo, you would be permitted to transfer a blob over to this new repo.

It would be opened and checked that it matched.

This should be the same mechanism that gets used for going between branches, and for going between repos, so it lets us choose a level of optimization for the binary data.

In the browser, the browser would generate the binary, use the tmpUpload call, and then pierce with some instructions on what to do with the binary.

Or instead of making a git object, it would upload to a holding area that is purely tmp storage, and then it would receive an id of the data, plus the hash of the data, which it can then refer to using a pierce action.  Also sends in the branch that is allowed to access it, which would be its backchat branch.

The pierce action, upon hitting the target branch, would convert the tmp object into git and add it to the commit.  It would delete the tmp file.

Then it would proceed with mv and cp operations as tho the file was inside git already.

Uploading a group of files might be done in the same way.
They would all be concatenated into a zip, and uploaded to the tmp directory, which returns an id and the hash.

Then the pierce informs that it is a zip file, and so it wants to

Might be faster on the db if the tmp directory was in fact a git object, and so there would not be multiple steps taken.  So the upload is to write a tmp file to the git repo and return when its done, from there you can do regular git operations on it.

OR make the basic ops, like write, be done at the time of upload.
So the instruction is everything the server needs to do a pierce.
You send in the destination, the pid, in the headers, and then the body is the binary stream, which could be several files or a single one.

