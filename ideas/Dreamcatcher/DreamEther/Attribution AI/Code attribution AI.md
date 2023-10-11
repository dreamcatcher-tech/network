
## Principles
How much effort something took is independent of its value.
Attribution is updated regularly based on feedback
Attribution is recalculatable at any moment, and is instantly run each time a payment comes in
It is never complete, and is always trending towards complete.
Attribution follows popular code quality wisdom - if a function is too large to fit the LLM context window, then it gets no attribution - don't write massive functions.
Using the system should automatically contribute to its progression
Each code package should have a verified attribution map to simplify dispersion
Code consists of functions, and those functions have value - this is the unit of attribution in the system.  The core of code is functions, so this is a good demarcation point.
reward novel useful code, give diminishing rewards for repeated code blocks
forloops have diminishing value after the initial calls
## Notes
Value per function ?
Per line

it isn't just who added what line, but how much use is that line to the overall function, such as variable assignment.  We could end up with something like ethereum gas price tables, where we say what each op is, and give example functions, and then the AI determines how to apply these rules ?

Make an adversarial AI that tries to game the attribution, and presents back recommendations.

A key part of the attribution defense is the ability to reference all other functions that were similar.  Ultimately the similarity to existing functions should be considered too, as a form of novelty score.

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

Is it possible that code coverage is actually the metric for code utility ?  So a solution that was accepted by QA pays out by the coverage that occured ?  Surely it should be the relative value of the functions ?

Loops that cause the AI to defend itself against negatively weighted feedback so that it settles on something defensible after considering all plausible arguments.

Turns out git blame is the same as attribute.

Think we need to apply this each commit and build up the scores incrementally, to handle people copy pasting over the top or merely refactoring something.

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

V1 
Each function is given a difficulty rating which is blended with a novelty / plaigiarism score, and within that function, shares are allocated to contributors.
Value is determined by the number of times each function is called multiplied by its value, and so the total of these scores represents the invocation cost.  
Each function call makes note of the attribution due for that call, which accounts for branches that have different attribution amounts.
So all functions are stack ranked and then relative scores given to them all.  These stack ranks are comparable across projects, and have a lot of overlap, which provides a good basis to normalize from.
The ratios for all contributors are taken from the summation of all the allocations to them for each function call multiplied by 
The summation of the function calls with each scaled by its value score and split between its attributors is what determines the final outcome.

The order of the calls doesn't matter, so we can include a huge number of coverage tests in each dispersal run.

? What about if the price was determined by the value calculation, rather than being fixed ?

Could do a study of the psuedo code deduplication and stack ranking using open source projects.