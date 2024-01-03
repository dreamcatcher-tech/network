
>[!tip] Created: [2024-01-03 Wed 13:34]

>[!question] Targets: 

>[!danger] Depends: 

Based on a collection of text files, so long as we can reprompt and call out to an AI, we should be able to write any version of HAL that we like using this system.

We should be able to make the most basic of versions, and use this to construct the more advanced versions, and to expose what fundamental programming is required.

If it could boot just enough to pull down a github repo, then it can pull down the actual js modules it is designed to execute too.  Could pull them down live, and run in an iFrame.

If react components could be pulled in staight from github paths, in their compiled form, then we could make the initial framework light and stable, and separate out the react components, which can be loaded on the fly, in isolation.

Show the git hash + timestamp of the loaded OS.
So if we just provide enough code to load up git, then all the other parts are independent modules that get pulled in and worked on separately.  A fault in one module means you still have the rest of the system to work with, and you can use older versions of the components you used successfully too.  So the core can be thoroughly tested and stabilized, with modules being built out.

Use github as the authentication for each user, and use for privacy guarantees.  Run a little proxy on site to access MoneyWorks and to access github.  Use webrtc for browsers to connect with each other.

What you pull down and what you boot defines the whole behaviour of the system from there on.  So a kiosk would just load a different boot instruction set.

They might be able to be compiled in the browser somehow, but ideally we would have their compiled form.

AI could choose the react component or an arrangement of react components based on the context, so it could select different components to display at a particular path, and it could sniff the data at the path to choose what is the best way to display that information.

## Actions and piercings
To pierce is to make a git commit of external origin.
This would be handled by the permissions of the path where the piercing was made.

## Side effect design
Should it be an array that grows, or should it be a single file for each action ?

## Using the tool to write the tool
How can we use this git repo as a means of tracking all the info we are making about the tool itself ?
Should be able to write the markdown docs in the tool directly, and build up extra tooling within this suite.