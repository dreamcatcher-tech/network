
>[!tip] Created: [2024-07-01 Mon 22:02]

>[!question] Targets: 

>[!danger] Depends: 

If the task involves message passing, where one bot passes results to another, then we should start an instance of the planner, which manages this, so that the bots get invoked with single prompts and have their results picked up and relayed around as planned.

The planner can chat with the user to make sure it understands everything, and it might be able to do a synthetic run just to check everything works as plan, then get back to the user with a summary.

It should have a list of exceptions or little rules as well as the topology mapped out.

These workflows would be something like the business rules that get called on whenever changes occur in the filesystem.