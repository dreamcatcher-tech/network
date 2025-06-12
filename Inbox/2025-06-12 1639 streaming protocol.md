
>[!tip] Created: [2025-06-12 Thu 16:39]

>[!question] Targets: 

>[!danger] Depends: 

if we treat all streaming as partial writes to a file, then we can use the same system we do as to read a file ?

So for a job going to do some text generation, we should:
- register the job with the queue manager
- begin writing, where the transiet data remains in the workers ram
- listeners can track down the job id, then the worker id, and then start streaming in the file using our own streaming protocol, then mapt hat to the ai sdk protocol.

the principle is we only take over the job at write points to disk - partial writes need to start again if the job errors.

some clever jobbing can get around this, like if we were doing a best of 10 sample, then when one fails, this doesn't actually affect the final outcome as we can sample a new one if something dies part way.  so maybe sample 11 and discard 1.

So listeners have to somehow get hold of the job id ?
This can be just getting a listing for the currently active file writing jobs that are happening, and then you zone in on the exact chat you're interested in.

If the whole thing is simple files, and you can read a file or a folder, of you can stream it in, this means the means of reading is the same for streamed files as they are for fixed files.