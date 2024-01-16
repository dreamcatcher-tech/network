
>[!tip] Created: [2024-01-15 Mon 21:03]

>[!question] Targets: 

>[!danger] Depends: 

We can make git diagrams of all the kinds of IPC we need to support, like generators and other things.

If we can show every possible case of IPC and have tests showing it work and some load testing, then we should be good to go.

Should be able to auto generate each shape of relationships.
Analyze any set of paths and determine which component moves were employed.
Then generate automated test cases that handle an error at any given point in the processing code.

So we should be able to make a truth table to generate all combinations, and automatically generate the patterns, like a state machine.  This might be a good use for an AI tool to generate all these paths.

Then, images can be made representing the shape of each, which can be displayed in the test suite so we know we have always tested all possible moves.

If we could make an AI that could exhaustively generate all moves, then we work thru operating on each one, that seems best.

This should be part of the toolbox when the user asks for a particular type of plumbing operation, then it knows that it can only pull from these certain things.  So if they want a long running job, and external API call, or some other thing.