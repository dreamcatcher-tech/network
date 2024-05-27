
>[!tip] Created: [2024-05-27 Mon 12:44]

>[!question] Targets: 

>[!danger] Depends: 

generic github action that uses the upstream url ?

the git isolate can answer questions about git, by providing top level data and a template to interpret with.  Like passing in the config file, so that the bot knows how to answer questions.

Basically if we can use intelligence to define the functions, then our code shouldn't change much at all since we are never having to do presentation layer changes.

But there is a multi step process - first we need to find the help that knows about these types of operations.  Then, there may be some process to follow in the help, like checking a login.
Finally, we want to call the actual isolate functions to perform the task at hand.
Then, because we are in a branch, we need to pull down the latest changes into our branch.

Also this is happening in the superuser repo, not us.
Calling clone in HAL is different.
A HAL update is different to other updates.
Updating from your actor level into session is different.
Pushing down into all currently running sessions matters.

In the session prompt, show a HAL upgrade as a message ?  Upgrade message formats if required.

Give me a superuser session should allow me to somehow become the superuser ?

Sure, here are 10 example prompts:

1. "Can you clone the HAL repository from GitHub for me?"
2. "Fetch the HAL repo from GitHub."
3. "Please pull the HAL project from GitHub."
4. "Get the HAL repository from GitHub."
5. "Clone the GitHub repository named HAL."
6. "Download the HAL repo from GitHub."
7. "Retrieve the HAL repo from GitHub."
8. "Pull the HAL repository from GitHub for me."
9. "Could you clone the HAL repo on GitHub?"
10. "Grab the HAL repository from GitHub."

If we want to run our own version of the repo, then this prompt should work there too ?

Or, should each branch be always watching to see if it needs to pull from upstream ?

Need to seek out help files that can help do things we asked for.

The help file lets us assemble isolate functions together for different purposes using NL instructions.

Then this help can become a function that another help can call too.

The help should be configurable as a pure drone, which means it cannot do any text back, and it must do a function call return.

They need to be scoped to some context, like HAL would have some specific helps that only relate to HAL.
They also act as a bridge where it is too far to infer from a general help, and so a specific help is constructed that eases the discovery and guides the execution.

A help function wrapper would be where the api descriptions needed changing, so instead of changing the api, we would set up the help description to include function params, which were worded a certain way ?

The helps should be able to say what parameters they need, and to push back when insufficient.
