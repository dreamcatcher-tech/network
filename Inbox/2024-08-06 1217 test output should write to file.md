
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

Output a standard format json file that represents the run output for that particular file.
Include the OID of the test file so we know what it represents.
Once done, if the synth wants to read it, we give functions to read a specific result, or all results from a file.  Or just read in the whole file.

Multiple versions of a test would just be another object in an array.
If the variation params are set in the top level config, then we just repeat the whole test run a number of times.
Have the summary written too, updated automatically each time a new result comes in.


Goals:
- run all the test files in a repo
- run a collection of test files
- run a single test in a file
- run with generated prompts, reporting statistics back
- run tests when a file changes, and update the test results