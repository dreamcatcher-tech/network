
>[!tip] Created: [2024-11-07 Thu 14:52]

>[!question] Targets: 

>[!danger] Depends: 

Since the process is guaranteed to be the only thing executing during shockwave, we could get it to automatically hash and store the git object for the io.json ahead of time, and any files that would have changed.

So executing has complete control over that path in the fs.

This makes the reconciler very quick since it just needs to manage updating the git trees, rather than processing the files that came back.

Response would be just the filepaths and the oids.  The reconciler then bubbles them up from the leaves to get the next tree hash.

? when would it send out all the actions ?

How would it handle knowing when it is time to commit vs when to keep executing single operation things ?

If the thread just did things that were local, with no transmission, or just reads, then we should keep going with them in the process until we hit the action limit, or execution time limit.