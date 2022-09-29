CombinerAlgos allow for nesting and weighting of GovernanceAlgos. They contain logic about the order in which to run the embedded GovernanceAlgos, the data to pass to them, and how to weight the results.

The overall result passed back from a combinerAlgo is a “Yes/no” decision as to whether to accept the Pull Request passed in to them.

There are standard combinerAlgos (providing operations such as voting logic (e.g. 2 out of 3), percentage split and precedence. Custom comberingAlgos can also be written.
