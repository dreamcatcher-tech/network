
>[!tip] Created: [2024-07-31 Wed 15:19]

>[!question] Targets: 

>[!danger] Depends: 

we would add the tool call result to the thread, but not engage the thread any more.
This only occurs in the backchat thread.

ONLY if the focus is the same after this tool call returns would we rerun the thread.

So if a new thread is made, the current thread would stay static.

ANY creating a thread should have some initial prompt dropped in there.

Throw an error in switchboard if the agent suggested does not exist, and call the thread again, but now with the error message included somehow.


So what we want is to add the switchboard to the thread momentarily, and once it is chosen, then we wipe it from the thread ?
Or, just leave it in the thread, and maybe filter it out when submitting things ?
If it is an error, then do not filter it, and call the switchboard again.

agents:switch should be prepopulated with valid names as an enum, so the model can't really get it wrong.  But this seems harder to manage than providing the list along with the summaries, then erroring back, since it still can get schema controlled answers wrong too.

Restore navigation - we must be able to browse and navigate freely amonst filepaths, branches, and commits.

Display additional instructions for the agent each run too, so this can be displayed in the gui.

If backchat doesn't know how to handle something, it should start a new thread about that thing.

We should test the agents in more isolation - isolated from switchboard, with a few select test prompts, to ensure the behaviour is the same.
This needs to somehow be done on platform, rather than in the dev environment.
If we could run these tests inside the repo, using a CI version of deno, that would be ideal ?
If the tests could be assosciated with the agent somehow, then we could use the tests to generate summaries and other nice things.

If the testing in CI is happening using artifact on the Agents repo, then 