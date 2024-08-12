
>[!tip] Created: [2024-08-12 Mon 10:12]

>[!question] Targets: 

>[!danger] Depends: 

Writing your own code using our system seems essential.

Call it during chain execution via an api call to get the function results.
Being pure code, there would be no db access or other types of access.
The code would run in a compartment and only be able to use the api we give it.

Could use same interface as openai with a tool call request, if there is a need to do some other function call?

Running each actor as their own subhosting repo, so they are genuinely isolated from everyone else.  When they add more code in, the subhosting updates.

Using the tool call interface to snapshot api calls like branch listing, branch names, remote file reading - we do not need to store the results, we just need to store the hashlock on it so it is repeatable.

Branches should be a commit hash locked, so we can somehow get a versioned snapshot of all the available branches in a repo ?

Having your own subhosting would let you autho code using our tooling and interfaces, write tests for it, and run these tests massively in parallel.

We could make small versions of the editors occur in the browser, in an iframe, where we run the code in browser ?
Run a mini stackblitz environment and try to run the code there.

Per account means we could control spend more accurately for each one.
Modelled like this makes it easier for them to host their own versions.

Or we could just have a series of subhosting deployments that represented groups of independent functions.  Like publishing on npm basically, but it is liver than that.
Publish to jsr, and then we make deployments that pull these pieces in so they are runnable.

Subhosting is the purest form of isolation tho, and would force us to have cross repo comms in an efficient way.

May do the user supplied code as running inside of cloudflare webworkers since these allow dynamic imports.