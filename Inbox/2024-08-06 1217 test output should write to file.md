
>[!tip] Created: [2024-08-06 Tue 12:17]

>[!question] Targets: 

>[!danger] Depends: 

These things can be huge, so we might want to write direct to file, and read in what we want ?

to read large numbers of tests, we can call a summarizer / aggregator that would summarize what happened in large numbers of tests ?

The test output file would mimick the input file, but would be strictly formatted, and would include the results within it.

Naming should be the same as the test spec itself, and it just overwrites it, and can use git to recover it.

Runs would not be saved upwards unless we explicitly said ?

The runs take place in a branch, and then their results are accumulated into an output file.

Synth would tell the runner to run a glob pattern of files, then a new branch would form, dedicated to that run, with a file named appropriately.
	Synth would only be running a single run at a time, never more than one.



Goals:
- run a collection of test files
- run all the test files in a repo
- run a single test in a file
- run with generated prompts, reporting statistics back