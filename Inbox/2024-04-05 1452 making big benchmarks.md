
>[!tip] Created: [2024-04-05 Fri 14:52]

>[!question] Targets: 

>[!danger] Depends: 

If the tests are written so that during CI they get called with low numbers, but during benchmarking they get bigger numbers, and provide a way for us to run experiments for tuning purposes, then we can not sacrifice code coverage, but at the same time have correctness in our benchmarks.

So writing 10k files would be just making a single file, and randomizing the strings in it, then writing it out 10k times.  Test doing one massive commit, then breaking it apart into multiples.

Time updating a single file in a 10k batch.

Test doing 10k ops on the files, using as many branches as we can get good performance out of.  Try one branch, and 10k branches, and a few in between.

The benchmarks should be callable as an isolate so that we can interact with them in the cloud too.

Then move on to doing this for 10k AI calls, where the job is to write an initial file.