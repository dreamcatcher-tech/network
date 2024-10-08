
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

Request upload would be headers for config, then streaming data in zip format, so it can support multiple files, and the filenames are in there.  Request is targeted at an arbitrary PID, but it goes via the backchat.

This could be just overlaid on the filesystem directly.

Server receives this stream, and writes it in to the filesystem. 

So in the headers, the pid is provided, and the stream is the filesystem updates we want to make.
Server checks permissions with the PID, and then it writes the files to git blobs in this branch, then sends a queue message to include these file changes into the filesystem.
This is streamable.

The server should write an intent message and release a cleanup queue action, which will be delayed, and will execute if the server hasn't cleaned up its in progress notification.
If the server errors, or the client doesn't upload, then it would wipe the blobs, but only if they hadn't been used yet.

in the kvtoolbox, maybe we could change the format so it can allow a path rename easily, without altering the value.  So to move an object, this would allow us to have tmp git objects off on the side, like the commit objects we are hoping to include, and then go in the tmp path in the kv store, then when they get used they get moved.  This would allow for two files to have the same hash be operated on independently in a repo, and not accidentally delete something during a stale cleanup.

Call the server, get the items inserted into the tmp slice on the repo, then when done, send a pierce within the timeout, and this will be relayed to the target pid, and tell it to update the array of filepaths with the oids of the tmp objects.

When running, the system then updates the filepaths atomically, and errors if something happens.  Will retry while the head keeps changing.

Error if the tmp files are not found.

The write to tmp returns the oids of the blobs, which the sender can check and redo as required.

Upload process returns an object with filepaths as keys, which can be entered directly into the pierce action.

Should work with B2 as well.


We could send the hashes of the current versions so we get an error if something happened in the meantime.

We need a way to work on a repository, using this command like structure, so like the obsidian repo can be stored and its main branch is never polluted by artifact, but this happens on a separate branch.