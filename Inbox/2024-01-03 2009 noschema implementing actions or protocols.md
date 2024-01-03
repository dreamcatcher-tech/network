
>[!tip] Created: [2024-01-03 Wed 20:09]

>[!question] Targets: 

>[!danger] Depends: 

We can run the interpulse protocol using LLMs.  But, this protocol is only for doing remove execution of things.

We could in fact, skip this completely, and use the file system as a queue of commands to be executed against some code.  This can be run in a sandbox, and can be called with function parameters the same as gpt4 api uses.

This way, the LLM can ask for an external function to be called, which is called using json parameters, and then we simply fire up the code from the requested location into a sandboxed environment, and execute it using the parameters given.  We *might* give it some state access by accessing the filesystem in a limited way.

This means that external calls can be made with the system easily, and we can run arbitrary code with consensus on the outputs and other measurements like CPU usage, datetime requests, etc.

So the api would be in json, and the environment it needs to run in, plus source etc, would be in some kind of config file, so we know how to set up what it needs.

? What about running other parts of the tree using llms in the same fashion ?

? how can encryption be done using git ?  We could encrypt each object perhaps ?

pgp sing can be used to handle server identity ?

walk in git could be how lensing is implemented.

lol we get all the commit analyzing tools of git that we can use to replay situations.
We should use the commits as a form of json message or some kind of useful info.

This whole crazy idea is that LLMs can perform any kind of logic you want, and so the whole protocol of the blockchain should be implemented this way.  That is to say, all programming should be done using the LLM.
## Importing from db
make a module that is import( start, filter, count ) that we want to run to check in with the moneyworks db.
This would be running as a separate repo to the main data, so that all the polling calls isn't polluting the main thread, except when something actually happens.

The LLM would decide that it was time to make the call, and then it would commit the instruction to git.
The executor of the LLMs will would see this change, and would fire up the module with the args, and then would pierce back in with the result, which would trigger the LLM to make more changes to the FS.

A tactic:
Get the total number of records.
Get the first one and the last one, then get a random sample in between.
Use these to generate a standard template.
Start from the begining and load up each one.
Track the last modified time of each one, keeping tally of what is the highest.
Sanity check against what we know the time is.
Then, start polling after the latest last to get anything new, but ensure that we get the highest last few ones, just to check that our theory is correct.

## Time delays / cron
Cron could be a file, and we set of timers that check it every second, and then trigger if something is time to run, to allow the LLM to get a callback.

## Implementing HAL
With some bare minimum work, we should be able to run any type of HAL runner using NL.  This should be encapsulated on the filesystem.

## Libp2p
The networking should be driven by the LLM, and the status would be updated by writing to a document in the filesystem.
? how to pull down git repos in a distributed fashion like torrents ?
? how to track payment for network resources ? GPU resources ? API call resources ?

## The stuck loop
Be able to use vector search to access helps which define how things are to be done.
We should use this to make a huge blockchain that is all NL, but can have fancy logic injected.
Running the LLM is actually a side effect too.
Calling the API for the LLM is a side effect, just like any other side effect.

## Governing lambda functions
Can use a quorum of LLMs to control interactions with the AWS interface.
Can do load balancing and throttling where they look at the system stats dashboard and tune it appropriately.  A human can come in and add rules as the system behaviour emerges.
Allows us to fire up vast numbers of lambda functions to run the side effects we need, or to make LLM calls for us.
Each lambda function can run multiple side effects concurrently in isolation, so this is how we can control huge multi threading without having to make a vastly complicated chain system, since it can use NL and LLMs to govern its behaviour.

Good test is multi threaded encoding of a large video file.

Even GPU load can be balanced across machines since we can see their queue lengths and can move jobs around between them.

? is a react stateboard component actually a side effect ?
this would be committed, have a path to a thing, and get loaded on the fly in the stateboard with an ephemeral path or other kind of trigger to indicate that it should load.
Removing what to show on the canvas .md file is just a new commit with a blank canvas.
Can use links to pull in things from other locations.
The stateboard is a git repo too.

## Pegging to Eth
We should be able to take the HEAD commit and peg it to eth very simply.

## Creating an NFT

## Updating the defaults inside the app
Being git native, we can do a PR against the core repo if the user decides to edit some of the helps.
We would boot, then pull the latest version from the repo, then start to operate.
Periodically we would check for updates.
## Looping test over different goals being met

## make the base primitives, like collection with rules in it
By creating files and booting them, then testing them, we should be able to define what some default things are, and also be able to add to them.

