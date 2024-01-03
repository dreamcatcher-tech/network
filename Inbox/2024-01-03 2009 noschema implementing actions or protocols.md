
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