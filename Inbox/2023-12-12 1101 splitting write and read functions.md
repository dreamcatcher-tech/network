
>[!tip] Created: [2023-12-12 Tue 11:01]

>[!question] Targets: 

>[!danger] Depends: 

Some functions should be called by the LLM to get answers, and others called to make changes to artifact.  Reading or running a calculation should be somehow prefixed and should not incur any pulses to change in artifact.  This might be by running the action and observing no change in the state, which means we can disregard making a commit at the end.

If the state changes, we can keep a fork going that is minimal.

When changes are being made, we should simulate the results and propose the changes to the user to be able to merge all the changes in one shot easily.