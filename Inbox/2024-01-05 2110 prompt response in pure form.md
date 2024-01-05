
>[!tip] Created: [2024-01-05 Fri 21:10]

>[!question] Targets: 

>[!danger] Depends: 

The prompt comes in, it should be an api call that updates a channel file based on the api that got called.  This will then trigger a side effect to run, which will take in that action, and create an input file based on the state stored in session.json.

OR, the location and format of the destination channel is written somewhere, so it can be piped around dynamically.  I can be split off into multiple simultaneous locations.  Then when a channel has been written to, it triggers a side effect to run.  That side effect knows how to update

Side effects can run between commits, but pure functions complete ?
Pure functions are reproducible executions, which are run in multiple locations to verify whats going on.

The input function should go straight into a preconfigured channel, of which there can be several, if multiple tty terminals are connected.  This write using the channel format triggers a function to run.  That function definition can be set up anywhere using the formats employed within the repo.  This can trigger an AI to run, or any thing else that has been configured.

Triggers start a process which is registered with the procman.  This is how tension is tracked.  It might be nested to allow large sizes to be processed well.  Eg: in a bunch of lamda functions, different submodules would be assigned to different functions to do processing of.

? What about tracking read access ?  We could track pulls, and we can easily track merges.