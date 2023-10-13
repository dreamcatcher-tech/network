Can make a simple version that uses a github repo as the permanent data store, with the agents running in the individual browsers.

the core config is plain text files, and this only gets updated if one of the clients proposes a PR that triggers the action.

## Jest tester system
In making the AI helper, we need a way to run tests against the prompts that are being submitted.
We need a public version of the prompt, which is probably just the website files being updated with the new prompt loader.
The jest tests must be able to run locally, so the human programming them can modify files and see output.