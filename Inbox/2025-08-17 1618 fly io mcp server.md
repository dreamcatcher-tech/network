
>[!tip] Created: [2025-08-17 Sun 16:18]

>[!question] Targets: 

>[!danger] Depends: 

We would wrap this, and break the tools up into packs.

we would make some of the tools be resources, and we would allow subscription to it, so the bots could launch triggers.

then we would teach a bot how to run this thing.

This is by telling it to do something, saying what it should have done, then having another agent go in and keep rerunning the eval until the tool call was correct.

We basically stop it on the tool call, rather than anything else.  Rerun the bot up to the poin tof the tool call we took issue with.  in this way, the agent is trained, where another agent does the reprompting, testing, and possibly fine tuning.

virtualizer - this bit simulates what would have happened without having the actual thing occur.
this can be extracted by analyzing the logs of actual infrastructure, then make a convenyance? test to ensure that its virtual formats match - this gets rerun periodically to make sure it still fits nicely.