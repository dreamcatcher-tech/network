Value per function ?
Per line

The problem is that a number of commits can occur thruout a program, and then the live running code paths are a smaller subset of the program execution.
Functions can be called multiple times.
Firstly there is a dispersal event for funds when the code is submitted to Dreamcatcher, but 
For dispersals, we should only reward on test covered code, as this is the first execution.
Does running more times mean its more valuable ?
If we say that tests need to have meaningfully different code paths, then we can discard repeat test runs that use the same thing multiple times.

May need a format, like diffs, for markup of files to show attribution value.
Ultimately if some kind of fancy diffing tool, like [pijul](https://pijul.org/) (git but has more mathematically useful, like having commutation properties) then we should make this tool also include a raw to quickly compute and store multiple versions of attribution.  So the git tool itself is able to be used directly to compute attribution, rather than the processing steps we use going thru text and diff formats.

Pipeline seems to need an AI processing step that generates a diff / attribution map, and then a runner that traces execution paths and accumulates line hits of value, possibly with a sampling tool for multiple runs taking place.

Should be able to run as a github action upon code commits.

Have some base table of values to guide how it interprets things.

Purest breakdown is the AST of the code, but lines is good since using a formatter, a line is an easily digestable piece for a human to consider.  We should include tests for cyclomatic complexity to ensure the code is not convoluted to the point where multiple contributors will have difficulty being rewarded.

So to attribute fairly we have to:
1. Determine the relative value of each person commit to a codebase
2. determine which parts of the codebase provided how much value to each customers function call
3. take the price paid per function call and split it amongst all contributors

Perhaps we could start with some commit patterns and code patterns to see what output we get ?


How would reward be given for an AI application ?
Can focus on the dreamcatcher packetizer as the first client of this system ?
Followed by the CRM.

## Task
take 3 committers, calculate the attribution for them reaching packet completion, and attribution

## Approaches
### Per commit line value per file
then rollup once the used codepath is known.


## Attempts
V1
Go thru a github repo

## Approach
Get a test github repo with some good characteristics
Assess the value of each commit
